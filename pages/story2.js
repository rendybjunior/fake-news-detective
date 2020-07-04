import Link from 'next/link';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Story2() {
	return (
		<Layout story>
			<img src="/images/company.png" className={`${homeStyles.storyImage}`} alt="player" />
			<h3>Welcome, Fact Checker!</h3>
			<div className={`${homeStyles.storyBox}`}>
				<p>
					<b>Welcome to Hoax Buster Fact Checking Organization!</b>
				</p>
				<p>
					Our mission is to fight fake news by warning our followers in social media when we see something
					strange with a news.
				</p>
				<p>You will analyze some news and decide what to say to our followers.</p>
				<p>The more you help people with truth, the more score you got.</p>
				<p>Let's start!</p>
			</div>
			<section className={homeStyles.startButton}>
				<Link href="/levels">
					<a className={homeStyles.button}>Next</a>
				</Link>
			</section>
		</Layout>
	);
}
