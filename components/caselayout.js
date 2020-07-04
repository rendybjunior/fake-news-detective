import Head from 'next/head';
import Link from 'next/link';
import Comment from './comment';
import Layout from './layout';
import utilStyles from '../styles/utils.module.css';
import homeStyles from '../styles/home.module.css';

export function getOption(option_type, text, next_id) {
	if (option_type == 'dialog') {
		return (
			<Link href="/dialogs/[id]" as={`/dialogs/${next_id}`}>
				<a className={`${homeStyles.button} ${homeStyles.blockbutton}`}>{text}</a>
			</Link>
		);
	} else {
		return (
			<Link href="/results/[id]" as={`/results/${next_id}`}>
				<a className={`${homeStyles.button} ${homeStyles.blockbutton}`}>{text}</a>
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
			<Comment image_url="/images/explore.png" text={caseData.comment} />
			<div className={`${homeStyles.content}`}>
				<img src={caseData.content} alt={caseData.title} />
			</div>
			<div className={`${homeStyles.storyBox}`}>
				<div className={`${homeStyles.prompt}`}>
					<Comment image_url="/images/explore.png" text={caseData.prompt} />
				</div>
				<div className={`${homeStyles.options}`}>
					<ul className={utilStyles.list}>
						{caseData.options.map(({ id, text, next_id, type }) => (
							<li className={utilStyles.listItem} key={id}>
								{getOption(type, text, next_id)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	);
}
