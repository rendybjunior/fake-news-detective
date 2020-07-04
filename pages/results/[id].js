import Link from 'next/link';
import Head from 'next/head';
import Comment from '../../components/comment';
import Layout from '../../components/layout';
import ResultComment from '../../components/resultcomment';
import UserLevel from '../../components/userlevel';
import { getAllResultIds, getResultData } from '../../lib/results';
import homeStyles from '../../styles/home.module.css';

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
	// nextCase = getCaseData(resultData.next_id);
	return (
		<Layout score={resultData.points}>
			<Head>
				<title>{resultData.title}</title>
			</Head>
			<h4>{resultData.title}</h4>
			<ResultComment text={resultData.comment} points={resultData.points} />
			<Comment image_url="/images/woman.png" text={'Alice: ' + resultData.response} />
			<div className={`${homeStyles.storyBox}`}>
				<b>&#10067; Do you know?</b>
				<p>{resultData.material}</p>
			</div>
			{resultData.points > 0 ? (
				<audio id="bgm" src="/sounds/320775__rhodesmas__win-02.mp3" autoPlay={true} />
			) : (
				<audio id="bgm" src="/sounds/362204__taranp__horn-fail-wahwah-3.mp3" autoPlay={true} />
			)}
			<p>
				<a href={resultData.reference} target="_blank">
					Learn more
				</a>
			</p>
			<p>
				<UserLevel
					gameLevel={resultData.next_level}
					gameCase={resultData.next_case}
					gameTitle={'Continue'}
					newLevel={resultData.next_level}
					newCase={resultData.next_case}
				>
					<Link href="/cases/[id]" as={`/cases/${resultData.next_id}`}>
						Continue
					</Link>
				</UserLevel>
			</p>
		</Layout>
	);
}
