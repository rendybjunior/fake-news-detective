import Link from 'next/link';
import CaseLayout from '../../components/caselayout';
import { getAllDialogIds, getDialogData } from '../../lib/dialogs';

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

export default function Dialog({ dialogData }) {
	return <CaseLayout caseData={dialogData} />;
}
