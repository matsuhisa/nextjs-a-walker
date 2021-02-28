import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/Layout'
import { Post } from '../../../../interfaces'
import { cloudinaryOgImageUrl } from '../../../../lib/cloudinaryOgImage'
import { getAllYearMonths, getPostsData, getYearMonthPostIds } from '../../../../lib/post'

type monthYearProps = {
  year: string,
  month: string,
  posts: Post[],
  yearAndMonths?: any[],
}

const MonthIndex = (data: monthYearProps) => {
  const title = `${data.year}年${data.month}月別（${data.posts.length}件） | めも帖`
  const ogImageUrl = cloudinaryOgImageUrl(title)
  return(
    <>
      <Head>
        <meta property="og:image" content={ogImageUrl} key="title" />
      </Head>
      <Layout title={title}>
        <h1>📅 {data.year}年{data.month}月別（{data.posts.length}件）</h1>
        <div className="year-month-articles">
          {data.posts.map((post: Post) => (
            <Link href={`/articles/${post.id.join('/')}`}>
              <a className={'article'}>
                <p className={'article__date'}>{post.date}</p>
                <h2 className={'article__title'} dangerouslySetInnerHTML={{ __html: post.title }} />
                <p className={'article__description'}>{post.description}</p>
              </a>
            </Link>
          ))}
        </div>

        <h2>📅 月別アーカイブ</h2>
        <ul>
        {data.yearAndMonths?.map((yearAndMonth) => (
          <li>
            <Link href={`/articles/${yearAndMonth.year}/${yearAndMonth.month}`}>
              <a>{yearAndMonth.year}年{yearAndMonth.month}月</a>
            </Link>
          </li>
        ))}
        </ul>
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
      yearAndMonths: getAllYearMonths().map( (path) => { return path.params } ).sort((a, b) => Number(b.year) - Number(a.year)),
    }
    return { props: data }
  } else {
    return { props: {} }
  }
}