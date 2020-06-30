import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllResultIds, getResultData } from '../../lib/results';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
	const paths = getAllResultIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const resultData = await getResultData(params.id);
	return {
		props: {
			resultData
		}
	};
}

export default function Result({ resultData }) {
	return (
		<Layout score={resultData.points}>
			<p>{resultData.comment}</p>
			<p>{resultData.response}</p>
			<p>{resultData.material}</p>
			<p>Points : {resultData.points}</p>
			<p>
				<a href={resultData.reference} target="_blank">
					Learn more
				</a>
			</p>
			<p>
				<Link href="/cases/[id]" as={`/cases/${resultData.next_id}`}>
					Continue
				</Link>
			</p>
		</Layout>
	);
}
