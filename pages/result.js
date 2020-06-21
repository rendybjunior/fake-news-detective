import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Level 1 - Case 1</title>
			</Head>
			<h1>Result Level 1 - Case 1</h1>
			<Link href="/levels">
				<a>Back to Game Levels</a>
			</Link>
		</Layout>
	);
}
