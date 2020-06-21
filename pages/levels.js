import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Levels</title>
			</Head>
			<h1>Game Levels</h1>
			<h2>Level 1</h2>
			<Link href="/case">
				<a>Case 1 - Unbreak My Heart</a>
			</Link>
		</Layout>
	);
}
