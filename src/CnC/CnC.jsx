import { useEffect } from 'react';
import { InterfaceMaker } from './InterfaceMaker';
import { useCheckGame } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectGameEnd } from '../selectors';
import { GAME_END } from '../actions';
import { RESUME_GAME } from '../actions';

export const CrossesNCircles = () => {
	const dispatch = useDispatch();
	dispatch(RESUME_GAME);
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const CheckGame = useCheckGame();

	useEffect(() => {
		if (gameEnd !== true) {
			const gameOver = CheckGame();
			if (gameOver) {
				dispatch(GAME_END);
			}
		}
	}, [crossMove, gameEnd, dispatch, CheckGame]);

	return InterfaceMaker();
};
