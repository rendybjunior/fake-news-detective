import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllDialogIds, getDialogData } from '../../lib/dialogs';
import utilStyles from '../../styles/utils.module.css';
import homeStyles from '../../styles/home.module.css';

export async function getStaticPaths() {
	const paths = getAllDialogIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const dialogData = await getDialogData(params.id);
	return {
		props: {
			dialogData
		}
	};
}

export function getOption(option_type, text, next_id) {
	if (option_type == 'dialog') {
		return (
			<Link href="/dialogs/[id]" as={`/dialogs/${next_id}`}>
				{text}
			</Link>
		);
	} else {
		return (
			<Link href="/results/[id]" as={`/results/${next_id}`}>
				{text}
			</Link>
		);
	}
}

export default function Dialog({ dialogData }) {
	return (
		<Layout>
			<Head>
				<title>{dialogData.title}</title>
			</Head>
			<h4>{dialogData.title}</h4>
			<img
				src="/images/explore.png"
				className={`${homeStyles.commentImage} ${utilStyles.borderCircle}`}
				alt="player"
			/>
			<div className={`${homeStyles.speechbubblewrapper}`}>
				<div className={`${homeStyles.speechbubble}`}>
					<div className={`${homeStyles.speechbubbletext}`}>{dialogData.comment}</div>
				</div>
			</div>
			<img src={dialogData.content} alt={dialogData.title} />
			<div className={`${homeStyles.prompt}`}>
				<div className={`${homeStyles.comment}`}>
					<img src="/images/explore.png" className={`${homeStyles.commentImage}`} alt="player" />
					<div className={`${homeStyles.speechbubblewrapper}`}>
						<div className={`${homeStyles.speechbubble}`}>
							<div className={`${homeStyles.speechbubbletext}`}>{dialogData.prompt}</div>
						</div>
					</div>
				</div>
			</div>
			<ul className={utilStyles.list}>
				{dialogData.options.map(({ id, text, next_id, type }) => (
					<li className={utilStyles.listItem} key={id}>
						{getOption(type, text, next_id)}
					</li>
				))}
			</ul>
		</Layout>
	);
}
