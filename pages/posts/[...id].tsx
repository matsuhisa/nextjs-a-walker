import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'
import { Post } from '../../interfaces'
import { getAllPostIds, getPostData } from '../../lib/post'

const PostDetail = (data: Post) => {
  const encodeTitle: string = encodeURIComponent(data.title.replace('/', '／'))
  return (
    <Layout>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      <img src={`https://res.cloudinary.com/kamonegi1977/image/upload/l_text:Sawarabi%20Gothic_50_bold:${encodeTitle},co_rgb:333,w_500,c_fit/v1608393336/ogp_iynadb.png`} />
    </Layout>
  )
}
export default PostDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths, fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data = {}
  if(params?.id != undefined && typeof(params?.id) !== 'string'){
    data = await getPostData(params?.id)
  }
  return { props: data }
}
