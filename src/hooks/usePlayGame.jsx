import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectFields, selectGameEnd } from '../selectors';

export const usePlayGame = () => {
	let fields = useSelector(selectFields);
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const dispatch = useDispatch();

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
						fields[id] = currentField;
						dispatch({ type: 'SET_FIELD_STATUS', payload: fields }); ////
						dispatch({ type: `SET_X_FIELDS`, payload: currentField.id });
						break;
					case false:
						currentField.className = `circleField`;
						currentField.symbol = `o`;
						dispatch({ type: `SET_O_FIELDS`, payload: currentField.id });
						break;
					default:
				}
			}
			dispatch({ type: 'CHANGE_WHO_PLAYING' });
		}
	};
	return playing;
};
