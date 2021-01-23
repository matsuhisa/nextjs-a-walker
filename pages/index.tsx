import { GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPostIds, getAllYearMonths, getPostsData } from '../lib/post'

type IndexProps = {
  posts: any[],
  yearAndMonths?: any[],
}

const IndexPage = (data: IndexProps) => (
  <Layout title={"めも帖"}>
    <h1>めも帖</h1>
    <div className="top-articles">
      {data.posts.map((post) => (
        <Link href={`/articles/${post.id.join('/')}`} key={post.id.join('-')}>
          <a className={'article'}>
            <p className={'article__date'}>{post.date}</p>
            <h2 className={'article__title'} dangerouslySetInnerHTML={{ __html: post.title }} />
          </a>
        </Link>
      ))}
    </div>
    <ul>
    {data.yearAndMonths?.map((yearAndMonth) => (
      <li>
        <a href={`/articles/${yearAndMonth.year}/${yearAndMonth.month}`}>{yearAndMonth.year}年{yearAndMonth.month}月</a>
      </li>
    ))}
    </ul>
  </Layout>
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