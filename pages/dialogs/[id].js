import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllDialogIds, getDialogData } from '../../lib/dialogs';
import utilStyles from '../../styles/utils.module.css';

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
			<h1>{dialogData.title}</h1>
			<p>{dialogData.comment}</p>
			<img src={dialogData.content} alt={dialogData.title} />
			<p>{dialogData.prompt}</p>
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
