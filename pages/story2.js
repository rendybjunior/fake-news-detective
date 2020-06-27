import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Story2() {
	return (
		<Layout>
			<h2>Welcome to Hoax Buster, the fact checking organization!</h2>
			<p>
				Our mission is to fight fake news by warning our followers in social media when we see something strange
				with a news.
			</p>
			<p>
				You will be assigned some contents to analyze. And you will decide what to say to our followers. The
				more you help people to know what is true, the more score you got.
			</p>
			<p>Let's help the people to know what is true and what is not!</p>
			<section className={homeStyles.startButton}>
				<Link href="/levels">
					<a>Next</a>
				</Link>
			</section>
		</Layout>
	);
}
