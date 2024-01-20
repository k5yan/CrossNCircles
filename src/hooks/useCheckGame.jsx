import { useDispatch, useSelector } from 'react-redux';
import { casesToWin } from '../constants';
import { selectXfields, selectOfields, selectCrossMove } from '../selectors';
import { SET_WIN_COMBINATION } from '../actions';

export const useCheckGame = () => {
	const dispatch = useDispatch();
	const crossMove = useSelector(selectCrossMove);
	const Xfields = useSelector(selectXfields);
	const Ofields = useSelector(selectOfields);
	const fields = crossMove ? Ofields : Xfields;
	let fieldsWin = 0;
	let win = false;

	const checking = () => {
		casesToWin.forEach((combo, id) => {
			fieldsWin = 0;
			combo.forEach((cage) => {
				if (fields.includes(cage)) {
					fieldsWin++;
				}
				if (fieldsWin === 3) {
					win = true;
					dispatch(SET_WIN_COMBINATION(id));
				}
			});
		});
		return win;
	};

	return checking;
};
