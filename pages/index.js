import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@rendybjunior" />
				<meta name="twitter:title" content="Fake News Detective Game" />
				<meta
					name="twitter:description"
					content="Check this game out to learn how to spot fake stories on social media."
				/>
				<meta name="twitter:image" content="https://fake-news-detective.herokuapp.com/images/explore.png" />
			</Head>
			<section className={homeStyles.startButton}>
				<h2>
					<Link href="/story">
						<a className={homeStyles.button}>Start</a>
					</Link>
				</h2>
			</section>
		</Layout>
	);
}
