import React from 'react'
import Head from 'next/head'
import MDXDocument, {metadata} from './posts/test.mdx'
import Layout from '../components/layout'

export default () => (
  <>  
  <Head>
    <title>{metadata.title}</title>
  </Head>
  <Layout>
    <MDXDocument/>
  </Layout>
  </>
)
