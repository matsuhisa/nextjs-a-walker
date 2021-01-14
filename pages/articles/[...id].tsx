import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { Post } from '../../interfaces'
import { cloudinaryOgImageUrl } from '../../lib/cloudinaryOgImage'
import { getAllPostPaths, getAllYearMonths, getPostData } from '../../lib/post'

type DetailProps = {
  post: Post,
  yearAndMonths?: any[],
}

const PostDetail = (data: DetailProps) => {
  const ogImageUrl: string = data.post.image ? `/${data.post.image}`:cloudinaryOgImageUrl(data.post.title)
  return (
    <>
      <Head>
        <meta property="og:image" content={ogImageUrl} key="title" />
      </Head>
      <Layout title={`${data.post.title} | めも帖`}>
        <div className={'post'}>
          <h1 className={'post-title'}>{data.post.title}</h1>
          <div className={'post-date'}>{data.post.date}</div>
          <div className={'post-body'} dangerouslySetInnerHTML={{ __html: data.post.contentHtml }} />
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

  const data = {
    post: post,
    yearAndMonths: getAllYearMonths().map( (path) => { return path.params } ).sort((a, b) => Number(b.year) - Number(a.year)),
  }

  return { props: data }
}
