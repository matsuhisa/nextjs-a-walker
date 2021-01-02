import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPostIds, getPostsData } from '../lib/post'

const IndexPage = (data: { posts: any[] }) => (
  <Layout>
    <h1>めも帖</h1>
    {data.posts.map((post) => (
      <>
        <div>
          <h2>{post.title}</h2>
          <img src={post.image ? post.image:''} width={100} />
          {post.description}
          {post.date}
        </div>
      </>
    ))}
  </Layout>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const ids = getAllPostIds()
  const posts = await getPostsData(ids.sort( (a, b) => { return (a < b ? 1 : -1) }))
  const data = { posts: posts }
  return { props: data }
}