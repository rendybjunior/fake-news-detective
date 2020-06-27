import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Story() {
	return (
		<Layout>
			<h2>The story starts...</h2>
			<p>Once upon a time, fake news spreads out fast in social media and many people believe it is true.</p>
			<p>
				One of them, believe one fake story too much so that he open fires in an innocent pizza restaurant,
				thinking it is running a child sex ring (it is real!).
			</p>
			<p>This is where I decided to join fact checking organization to fight fake news.</p>
			<section className={homeStyles.startButton}>
				<Link href="/story2">
					<a>Next</a>
				</Link>
			</section>
		</Layout>
	);
}
