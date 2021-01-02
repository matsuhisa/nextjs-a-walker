import { GetStaticProps } from 'next'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <h1>めも帖</h1>
  </Layout>
)

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {

  const data = {}
  return { props: data }
}