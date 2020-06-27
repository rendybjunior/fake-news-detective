import fs from 'fs';
import path from 'path';

const casesDirectory = path.join(process.cwd(), 'cases');

export function getSortedCasesData() {
	const fileNames = fs.readdirSync(casesDirectory);
	const allCasesData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.json$/, '');
		const fullPath = path.join(casesDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const caseData = JSON.parse(fileContents);
		return {
			id,
			...caseData
		};
	});

	return allCasesData.sort((a, b) => {
		if (a.level < b.level) {
			return 1;
		} else if (a.level > b.level) {
			return -1;
		} else {
			// level is equal
			if (a.case < b.case) {
				return 1;
			} else if (a.case > b.case) {
				return -1;
			}
		}
	});
}
