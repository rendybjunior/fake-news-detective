import fs from 'fs';
import path from 'path';

const resultsDirectory = path.join(process.cwd(), 'results');

export function getAllResultIds() {
	const fileNames = fs.readdirSync(resultsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.json$/, '')
			}
		};
	});
}

export async function getResultData(id) {
	const fullPath = path.join(resultsDirectory, `${id}.json`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const resultData = JSON.parse(fileContents);
	return {
		id,
		...resultData
	};
}
