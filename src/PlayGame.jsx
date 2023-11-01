import { casesToWin } from './CnC';

export const PlayGame = (
	id,
	fields,
	crossMove,
	setCrossMove,
	Xfields,
	setXfields,
	Ofields,
	setOfields,
	gameEnd,
) => {
	if (gameEnd !== true) {
		const currentField = fields.find((pole) => {
			return pole.id === id;
		});
		if (currentField.className === `defaultField`) {
			switch (crossMove) {
				case true:
					currentField.className = `crossField`;
					currentField.symbol = `x`;
					setXfields(Xfields + currentField.id);
					break;
				case false:
					currentField.className = `circleField`;
					currentField.symbol = `o`;
					setOfields(Ofields + currentField.id);
					break;
				default:
			}
			setCrossMove((prevMove) => !prevMove);
		}
	}
};

export const checkGame = (fields, setWinCombo) => {
	let fieldsWin = 0;
	let win = false;
	casesToWin.forEach((combo, id) => {
		//добавь линию победы!
		fieldsWin = 0;
		combo.forEach((cage) => {
			if (fields.includes(cage)) {
				fieldsWin++;
			}
			if (fieldsWin === 3) {
				console.log(`______X WIN !!!!_____`);
				win = true;
				setWinCombo(id);
			}
		});
	});
	return win;
};
