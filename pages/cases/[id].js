import CaseLayout from '../../components/caselayout';
import { getAllCaseIds, getCaseData } from '../../lib/cases';

export async function getStaticPaths() {
	const paths = getAllCaseIds();
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const caseData = await getCaseData(params.id);
	return {
		props: {
			caseData
		}
	};
}

export default function Case({ caseData }) {
	return <CaseLayout caseData={caseData} />;
}
