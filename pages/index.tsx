import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPostIds, getAllYearMonths, getPostsData } from '../lib/post'

type IndexProps = {
  posts: any[],
  yearAndMonths?: any[],
}

const IndexPage = (data: IndexProps) => (
  <Layout title={"めも帖"}>
    <h1>めも帖</h1>
    {data.posts.map((post) => (
      <a href={`/articles/${post.id.join('/')}`} key={post.id.join('-')}>
        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
        <img src={post.image ? post.image:''} width={100} />
        <p>{post.description}</p>
        <p>{post.date}</p>
      </a>
    ))}
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