import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';

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

export default function CaseLayout({ caseData }) {
	return (
		<Layout>
			<Head>
				<title>{caseData.title}</title>
			</Head>
			<h4>{caseData.title}</h4>
			<div className={`${homeStyles.comment}`}>
				<img src="/images/explore.png" className={`${homeStyles.commentImage}`} alt="player" />
				<div className={`${homeStyles.speechbubblewrapper}`}>
					<div className={`${homeStyles.speechbubble}`}>
						<div className={`${homeStyles.speechbubbletext}`}>{caseData.comment}</div>
					</div>
				</div>
			</div>
			<div className={`${homeStyles.content}`}>
				<img src={caseData.content} alt={caseData.title} />
			</div>
			<div className={`${homeStyles.prompt}`}>
				<div className={`${homeStyles.comment}`}>
					<img src="/images/explore.png" className={`${homeStyles.commentImage}`} alt="player" />
					<div className={`${homeStyles.speechbubblewrapper}`}>
						<div className={`${homeStyles.speechbubble}`}>
							<div className={`${homeStyles.speechbubbletext}`}>{caseData.prompt}</div>
						</div>
					</div>
				</div>
			</div>
			<ul className={utilStyles.list}>
				{caseData.options.map(({ id, text, next_id, type }) => (
					<li className={utilStyles.listItem} key={id}>
						{getOption(type, text, next_id)}
					</li>
				))}
			</ul>
		</Layout>
	);
}
