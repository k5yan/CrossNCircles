import { casesToWin } from '../CnC';

export const CheckGame = (fields) => {
	let fieldsWin = 0;
	casesToWin.forEach((combo) => {
		fieldsWin = 0;
		combo.forEach((cage) => {
			if (fields.includes(cage)) {
				fieldsWin++;
				console.log(`XWin :`, fieldsWin);
				console.log(combo);
			}
			if (fieldsWin === 3) {
				console.log(`X WIN !!!!`);
			}
		});
	});
};
