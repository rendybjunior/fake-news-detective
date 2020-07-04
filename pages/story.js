import Link from 'next/link';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Story() {
	return (
		<Layout story>
			<img src="/images/explore.png" className={`${homeStyles.storyImage}`} alt="player" />
			<h3>How my story starts...</h3>
			<div className={`${homeStyles.storyBox}`}>
				<p>Once upon a time, fake news spreads out fast in social media and many people believe it is true.</p>
				<p>
					One of them, believed one fake story too much so that he opened gun fires in an innocent pizza
					restaurant, thinking it is running a child sex ring (it really happened!).
				</p>
				<p>
					<b>This is where I decided to join fact checking organization to fight fake news...</b>
				</p>
			</div>
			<section className={homeStyles.startButton}>
				<Link href="/story2">
					<a className={homeStyles.button}>Next</a>
				</Link>
			</section>
		</Layout>
	);
}
