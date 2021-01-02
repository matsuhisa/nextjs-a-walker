import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPostIds, getPostsData } from '../lib/post'

const IndexPage = (data: { posts: any[] }) => (
  <Layout>
    <h1>めも帖</h1>
    {data.posts.map((post) => (
      <a href={`/articles/${post.id.join('/')}`} key={post.id.join('-')}>
        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
        <img src={post.image ? post.image:''} width={100} />
        <p>{post.description}</p>
        <p>{post.date}</p>
      </a>
    ))}
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
  const data = { posts: posts }
  return { props: data }
}