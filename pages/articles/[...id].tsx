import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { Post } from '../../interfaces'
import { cloudinaryOgImageUrl } from '../../lib/cloudinaryOgImage'
import { getAllPostPaths, getPostData } from '../../lib/post'

const PostDetail = (data: Post) => {
  const ogImageUrl: string = data.image ? `/${data.image}`:cloudinaryOgImageUrl(data.title)
  return (
    <>
      <Head>
        <meta property="og:image" content={ogImageUrl} key="title" />
      </Head>
      <Layout title={data.title}>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
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
  let data = {}
  if(params?.id != undefined && typeof(params?.id) !== 'string'){
    data = await getPostData(params?.id)
  }
  return { props: data }
}
