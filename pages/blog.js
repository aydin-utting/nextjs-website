import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
export default function BlogHomepage() {

    return(
        <>
        <Head>
            <title>
                Blog
            </title>
        </Head>
        <Layout>
            <h1>
                Blog
            </h1>
            <Link href='blog/nextpost'>
                <a>Next Post</a>
            </Link>
        </Layout>
        </>
    )
}