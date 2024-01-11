import { useDispatch, useSelector } from 'react-redux';

export const usePlayGame = () => {
	const dispatch = useDispatch();
	const fields = useSelector((state) => state.fields);
	const crossMove = useSelector((state) => state.crossMove);
	const setCrossMove = useSelector((state) => state.setCrossMove);
	const Xfields = useSelector((state) => state.Xfields);
	const setXfields = useSelector((state) => state.setXfields);
	const Ofields = useSelector((state) => state.Ofields);
	const setOfields = useSelector((state) => state.setOfields);
	const gameEnd = useSelector((state) => state.gameEnd);

	const playing = (id) => {
		if (gameEnd !== true) {
			const currentField = fields.find((field) => {
				return field.id === id;
			});
			if (currentField.className === `defaultField`) {
				switch (crossMove) {
					case true:
						currentField.className = `crossField`;
						currentField.symbol = `x`;
						dispatch({ type: `SET_X_FIELDS`, payload: currentField.id });
						dispatch({ type: 'SET_CROSSMOVE', payload: !crossMove });
						break;
					case false:
						currentField.className = `circleField`;
						currentField.symbol = `o`;
						dispatch({ type: `SET_O_FIELDS`, payload: currentField.id });
						//dispatch({ type: `SET_CROSSMOVE`, payload: !crossMove }); //не работает
						break;
					default:
				}
			}
			//setCrossMove((prevMove) => !prevMove);
		}
	};
	return playing;
};
