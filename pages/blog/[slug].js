
import Layout from '../../components/layout'
import Head from 'next/head'
import { getPostBySlug, getAllSlugs } from '../../lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
const remarkImages = require('remark-images')
const remarkEmoji = require('remark-emoji')

export default function Post({source,frontMatter} ) {
    return (
        <>
        <Head>
            <title>{frontMatter.title ? frontMatter.title : "Blog Post"}</title>
        </Head>
      <Layout>
        <div className="wrapper">
      		<MDXRemote {...source} />
    	</div>
      </Layout>
      </>
    )
  }

export async function getStaticProps({params}) {
    const postData = getPostBySlug(params.slug)
    const mdxSource = await serialize(postData.content, { mdxOptions: {remarkPlugins: [remarkImages, remarkEmoji]} },)
    return { props: { source: mdxSource, frontMatter: postData.data } }
  }

export async function getStaticPaths() {
    const paths = getAllSlugs()
    return {
      paths,
      fallback: false
    }
  }