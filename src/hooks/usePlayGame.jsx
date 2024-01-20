import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectFields, selectGameEnd } from '../selectors';
import {
	SET_O_FIELDS,
	SET_X_FIELDS,
	SET_FIELD_STATUS,
	CHANGE_WHO_PLAYING,
} from '../actions';
import { OFIELD, XFIELD } from '../constants';

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
						fields[id - 1] = XFIELD(id); ///
						dispatch(SET_FIELD_STATUS(fields));
						dispatch(SET_X_FIELDS(id));
						break;
					case false:
						fields[id - 1] = OFIELD(id);
						dispatch(SET_FIELD_STATUS(fields));
						dispatch(SET_O_FIELDS(id));
						break;
					default:
				}
				dispatch(CHANGE_WHO_PLAYING);
			}
		}
	};

	return playing;
};
