import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedCasesData } from '../lib/cases';
import UserLevel from '../components/userlevel';

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
				{allCasesData.map(({ id, title, level, cases }) => (
					<li className={utilStyles.listItem} key={id}>
						<UserLevel gameLevel={level} gameCase={cases} gameTitle={title}>
							<Link href="/cases/[id]" as={`/cases/${id}`}>
								{title}
							</Link>
						</UserLevel>
					</li>
				))}
			</ul>
		</Layout>
	);
}
