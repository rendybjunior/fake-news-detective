import Link from 'next/link';
import Head from 'next/head';
import GameLayout from '../components/game_layout';
import Layout from '../components/layout';

export default function Result() {
	return (
		<Layout>
			<GameLayout>
				<Head>
					<title>Level 1 - Case 1</title>
				</Head>
				<div>
					<p>Cathy: You are right, the news site looks fishy! Almost believed. Thanks!</p>
				</div>
				<div>
					<p>
						Short materials about the learning objective. Short materials about the learning objective.
						Short materials about the learning objective.
					</p>
				</div>
				<Link href="/levels">
					<a>Learn more</a>
				</Link>
				<Link href="/levels">
					<a>Continue</a>
				</Link>
			</GameLayout>
		</Layout>
	);
}
