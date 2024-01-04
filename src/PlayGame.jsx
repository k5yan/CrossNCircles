import { useDispatch, useSelector } from 'react-redux';
import { casesToWin } from './CnC';
import { store } from './Store';

export const PlayGame = (id) => {
	const {
		fields,
		crossMove,
		setCrossMove,
		Xfields,
		setXfields,
		Ofields,
		setOfields,
		gameEnd,
	} = store.getState();
	// const dispatch = useDispatch();
	console.log(useSelector((state) => state.fields)); //здесь баг
	// const fields = useSelector((state) => state.fields);
	// const crossMove = useSelector((state) => state.crossMove);
	// const setCrossMove = useSelector((state) => state.setCrossMove);
	// const Xfields = useSelector((state) => state.Xfields);
	// const setXfields = useSelector((state) => state.setXfields);
	// const Ofields = useSelector((state) => state.Ofields);
	// const setOfields = useSelector((state) => state.setOfields);
	// const gameEnd = useSelector((state) => state.gameEnd);

	if (gameEnd !== true) {
		const currentField = fields.find((field) => {
			return field.id === id;
		});
		if (currentField.className === `defaultField`) {
			switch (crossMove) {
				case true:
					currentField.className = `crossField`;
					currentField.symbol = `x`;
					// dispatch({type: `SET_X_FIELDS`, payload: currentField.id});
					setXfields(Xfields + currentField.id);
					break;
				case false:
					currentField.className = `circleField`;
					currentField.symbol = `o`;
					// dispatch({type: `SET_O_FIELDS`, payload: currentField.id});
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
