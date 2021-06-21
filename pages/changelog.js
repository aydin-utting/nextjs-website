import {join} from 'path'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
//import ChangeLogMDX from "./changelog.mdx"
//import {bundleMDX} from 'mdx-bundler'
//import {getMDXComponent} from 'mdx-bundler/client'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
const readFileSync =  require('fs').readFileSync;
import matter from 'gray-matter'

export default function FirstPost({source,frontMatter}) {
	return (
		<Layout>
		<Head>
			<title>{frontMatter.title}</title>
		</Head>
		<div className="wrapper">
      		<MDXRemote {...source} />
    	</div>
		</Layout>
	)
}

export async function getStaticProps() {



	const filePath = join(process.cwd(),'pages/changelog.mdx')
	const fileContents = readFileSync(filePath, 'utf8');
	const { content, data } = matter(fileContents)
	const mdxSource = await serialize(content, { scope: data })
	return { props: { source: mdxSource, frontMatter: data } }
}