import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';

export default function Story() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/levels">
					<a>Start Game</a>
				</Link>
			</h2>
		</Layout>
	);
}
