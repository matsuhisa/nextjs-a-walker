import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Post } from '../../interfaces'
import { cloudinaryOgImageUrl } from '../../lib/cloudinaryOgImage'
import { getAllPostIds, getAllPostPaths, getAllYearMonths, getPostData, getPostsData } from '../../lib/post'

type DetailProps = {
  post: Post,
  yearAndMonths?: any[],
  nextPost: {},
  prevPost: {},
}

const PostDetail = (data: DetailProps) => {
  const ogImageUrl: string = data.post.image ? `/${data.post.image}`:cloudinaryOgImageUrl(data.post.title)
  return (
    <>
      <Head>
        <meta property="og:image" content={ogImageUrl} key="title" />
        <meta name="description" content={data.post.description} />
      </Head>
      <Layout title={`${data.post.title} | めも帖`}>
        <div className={'post'}>
          <h1 className={'post-title'} dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div className={'post-date'}>{data.post.date}</div>
          <div className={'post-body'} dangerouslySetInnerHTML={{ __html: data.post.contentHtml }} />

          <ul>
            {data.nextPost && 
              <li>
                <Link href={`/articles/${data.nextPost.id.join('/')}`}>
                  <a className={'post-pager__next'}>{data.nextPost.title}</a>
                </Link>
              </li>
            }
            {data.prevPost && 
              <li>
                <Link href={`/articles/${data.prevPost.id.join('/')}`}>
                  <a className={'post-pager__next'}>{data.prevPost.title}</a>
                </Link>
              </li>
            }
          </ul>
          <hr />
          <ul>
          {data.yearAndMonths?.map((yearAndMonth) => (
            <li>
              <a href={`/articles/${yearAndMonth.year}/${yearAndMonth.month}`}>{yearAndMonth.year}年{yearAndMonth.month}月</a>
            </li>
          ))}
          </ul>
        </div>
      </Layout>
    </>
  )
}
export default PostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostPaths()
  return {
    paths, fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = {}
  if(params?.id != undefined && typeof(params?.id) !== 'string'){
    post = await getPostData(params?.id)
  }

  const ids = getAllPostIds()
  let posts = await getPostsData(ids)
  posts = posts.sort((a,b) => {
    if (a.unixtime < b.unixtime) {
      return 1
    } else {
      return -1
    }
  })

  const postids = posts.map( (post) => { return post.id.join('/') } )
  const currentIndex: number = postids.indexOf(params?.id.join('/'))
  let prevPost = null
  let nextPost = null

  if(currentIndex >= 0 && postids.length >= currentIndex){
    prevPost = posts[currentIndex + 1]
  }
  if(currentIndex > 0){
    nextPost = posts[currentIndex - 1]
  }

  const data = {
    post: post,
    yearAndMonths: getAllYearMonths().map( (path) => { return path.params } ).sort((a, b) => Number(b.year) - Number(a.year)),
    prevPost: prevPost,
    nextPost: nextPost,
  }

  return { props: data }
}
