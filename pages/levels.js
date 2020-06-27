import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedCasesData } from '../lib/cases';

export async function getStaticProps() {
	const allCasesData = getSortedCasesData();
	return {
		props: {
			allCasesData
		}
	};
}

export default function Levels({ allCasesData }) {
	return (
		<Layout>
			<Head>
				<title>Levels</title>
			</Head>
			<ul className={utilStyles.list}>
				{allCasesData.map(({ id, title }) => (
					<li className={utilStyles.listItem} key={id}>
						<Link href="/cases/[id]" as={`/cases/${id}`}>
							{title}
						</Link>
					</li>
				))}
			</ul>
			{/* <h1>Game Levels</h1>
			<h2>Level 1</h2>
			<Link href="/case">
				<a>Case 1 - Unbreak My Heart</a>
			</Link> */}
		</Layout>
	);
}
