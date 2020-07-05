import Link from 'next/link';
import Layout from '../components/layout';
import homeStyles from '../styles/home.module.css';

export default function Story() {
	return (
		<Layout story>
			<img src="/images/explore.png" className={`${homeStyles.storyImage}`} alt="player" />
			<h3>How my story started...</h3>
			<div className={`${homeStyles.storyBox}`}>
				<p>Once upon a time, fake news spread out fast in social media, many people believe they are true.</p>
				<p>
					One man, believed one fake story too much, so that{' '}
					<a
						href="https://www.nytimes.com/2016/12/05/business/media/comet-ping-pong-pizza-shooting-fake-news-consequences.html"
						target="_blank"
					>
						he opened gun fires in an innocent pizza restaurant
					</a>, thinking it is running a child sex ring (glad that no one hurts!).
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
