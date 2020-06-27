import fs from 'fs';
import path from 'path';

const dialogsDirectory = path.join(process.cwd(), 'dialogs');

export function getAllDialogIds() {
	const fileNames = fs.readdirSync(dialogsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.json$/, '')
			}
		};
	});
}

export async function getDialogData(id) {
	const fullPath = path.join(dialogsDirectory, `${id}.json`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const dialogData = JSON.parse(fileContents);
	return {
		id,
		...dialogData
	};
}
