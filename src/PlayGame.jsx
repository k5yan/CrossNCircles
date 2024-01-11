import { casesToWin } from './CnC';

export const checkGame = (fields, setWinCombo) => {
	let fieldsWin = 0;
	let win = false;
	casesToWin.forEach((combo, id) => {
		fieldsWin = 0;
		combo.forEach((cage) => {
			if (fields.includes(cage)) {
				fieldsWin++;
			}
			if (fieldsWin === 3) {
				console.log(`______WIN !!!!_____`);
				win = true;
				setWinCombo(id);
			}
		});
	});
	return win;
};
