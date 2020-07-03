import Link from 'next/link';
import Layout from '../../components/layout';
import UserLevel from '../../components/userlevel';
import { getAllResultIds, getResultData } from '../../lib/results';

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
			<p>{resultData.comment}</p>
			<p>{resultData.response}</p>
			<p>{resultData.material}</p>
			<p>Points : {resultData.points}</p>
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
