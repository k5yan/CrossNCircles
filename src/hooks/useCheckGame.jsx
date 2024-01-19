import { useDispatch, useSelector } from 'react-redux';
import { casesToWin } from '../CnC';
import { selectXfields, selectOfields } from '../selectors';
import { selectCrossMove } from '../selectors';

export const useCheckGame = () => {
	const dispatch = useDispatch();
	let fieldsWin = 0;
	let win = false;
	const crossMove = useSelector(selectCrossMove);
	const Xfields = useSelector(selectXfields);
	const Ofields = useSelector(selectOfields);
	const fields = crossMove ? Xfields : Ofields;
	const checking = () => {
		casesToWin.forEach((combo, id) => {
			fieldsWin = 0;
			combo.forEach((cage) => {
				if (fields.includes(cage)) {
					fieldsWin++;
				}
				if (fieldsWin === 3) {
					console.log(`______WIN !!!!_____`);
					win = true;
					dispatch({ type: 'SET_WIN_COMBINATION', payload: id });
				}
			});
		});
		return win;
	};
	return checking;
};
