import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={homeStyles.startButton}>
				<h2>
					<Link href="/story">
						<a>Start</a>
					</Link>
				</h2>
			</section>
		</Layout>
	);
}
