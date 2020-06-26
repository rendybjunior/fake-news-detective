import Link from 'next/link';
import Head from 'next/head';
import GameLayout from '../components/game_layout';
import Layout from '../components/layout';

export default function Case() {
	return (
		<Layout>
			<GameLayout>
				<Head>
					<title>Level 1 - Case 1</title>
				</Head>
				<div>
					<p>Some contents</p>
				</div>
				<div>
					<p>Some prompts</p>
				</div>
				<div>
					Some options
					<p>
						<Link href="/result">
							<a>Option 1</a>
						</Link>
					</p>
					<p>
						<Link href="/result">
							<a>Option 2</a>
						</Link>
					</p>
					<p>
						<Link href="/result">
							<a>Option 3</a>
						</Link>
					</p>
				</div>
				<p>
					<Link href="/levels">
						<a>Back to Game Levels</a>
					</Link>
				</p>
			</GameLayout>
		</Layout>
	);
}
