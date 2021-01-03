import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import { Post } from '../../../../interfaces'
import { getAllYearMonths, getPostsData, getYearMonthPostIds } from '../../../../lib/post'

type monthYearProps = {
  year: string,
  month: string,
  posts: Post[],
}

const MonthIndex = (data: monthYearProps) => {
  return(
    <>
      <Head>
      </Head>
      <Layout title={`${data.year}年${data.month}月別（${data.posts.length}件） | めも帖`}>
        <h2>{data.year}年{data.month}月別（{data.posts.length}件）</h2>
        <dl>
          {data.posts.map((post: Post) => (
            <>
              <dt>{post.date}</dt>
              <dd>
                <Link href={`/articles/${post.id.join('/')}`}>{post.title}</Link>
              </dd>
            </>
          ))}
        </dl>
      </Layout>
    </>
  )
}
export default MonthIndex

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllYearMonths()
  return {
    paths, fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if(params?.year != undefined && params?.month != undefined && typeof(params.month) === 'string' && typeof(params.year) === 'string' ) {
    const year: string = params.year.toString()
    const month: string = params.month.toString()
    const postIds = getYearMonthPostIds(year, month)
    const posts = await getPostsData(postIds)

    const data = {
      year: year,
      month: month,
      posts: posts,
    }
    return { props: data }
  } else {
    return { props: {} }
  }
}