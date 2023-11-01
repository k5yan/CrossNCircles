import { casesToWin } from './CnC';

export const CheckGame = (fields) => {
	let fieldsWin = 0;
	casesToWin.forEach((combo) => {
		//работает, но не успевает обновиться
		//добавь юзэффект, чтобы чекать изменение состояния *
		//добавь вставку пропсов через массив в interface
		//добавь компонент с данными хода и победителем
		//добавь линию победы!
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
