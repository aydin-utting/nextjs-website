import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
export default function BlogHomepage() {

    return (
        <>
            <Head>
                <title>
                    Blog
                </title>
            </Head>
            <Layout>
                <h1>
                    Blog, but this is a really long title just for fun
                </h1>
                <p>This is the landing page for my blog. Soon to contain a list of most recent posts.</p>
                <Link href='blog/nextpost'>
                    <a>Next Post</a>
                </Link>
            </Layout>
        </>
    )
}