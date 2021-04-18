import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPostIds, getAllYearMonths, getPostsData } from '../lib/post'

type IndexProps = {
  posts: any[],
  yearAndMonths?: any[],
}

const IndexPage = (data: IndexProps) => (
  <>
    <Head>
      <meta name="description" content="めも帖 | あれこれ書いてあります" />
      <meta name="twitter:title" content="めも帖" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Layout title={"めも帖"}>
      <h1>めも帖</h1>
      <div className="top-articles">
        {data.posts.map((post) => (
          <Link href={`/articles/${post.id.join('/')}`} key={post.id.join('-')}>
            <a className={'article'}>
              <h2 className={'article__title'} dangerouslySetInnerHTML={{ __html: post.title }} />
              <p className={'article__date'}>{post.date}</p>
            </a>
          </Link>
        ))}
      </div>
      <hr />
      <ul>
      {data.yearAndMonths?.map((yearAndMonth) => (
        <li>
          <Link href={`/articles/${yearAndMonth.year}/${yearAndMonth.month}/`}>
            <a>{yearAndMonth.year}年{yearAndMonth.month}月</a>
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  </>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const ids = getAllPostIds()
  let posts = await getPostsData(ids)
  posts = posts.sort((a,b) => {
    if (a.unixtime < b.unixtime) {
      return 1
    } else {
      return -1
    }
  })
  const data = { 
    posts: posts,
    yearAndMonths: getAllYearMonths().map( (path) => { return path.params } ).sort((a, b) => Number(b.year) - Number(a.year)),
  }
  return { props: data }
}