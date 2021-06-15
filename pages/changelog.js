import Head from 'next/head'
import Layout from '../components/layout'
import ChangeLogMDX from "./changelog.mdx"

export default function FirstPost() {
	return (
		<Layout>
		<Head>
			<title>Changelog</title>
		</Head>
		<ChangeLogMDX/>
		</Layout>
	)
}