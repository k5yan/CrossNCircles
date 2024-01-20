import { useEffect } from 'react';
import { InterfaceMaker } from './InterfaceMaker';
import { useCheckGame } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCrossMove,
	selectGameEnd,
	selectOfields,
	selectXfields,
} from '../selectors';
import { GAME_END } from '../actions';
import { RESUME_GAME } from '../actions';

export const CrossesNCircles = () => {
	const dispatch = useDispatch();
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const Xfields = useSelector(selectXfields);
	const Ofields = useSelector(selectOfields);
	const CheckGame = useCheckGame();

	useEffect(() => {
		dispatch(RESUME_GAME);
	}, [dispatch]);

	useEffect(() => {
		if (gameEnd !== true) {
			const gameOver = CheckGame();
			if (gameOver) {
				dispatch(GAME_END(1));
			} else if (Ofields.length + Xfields.length === 9) {
				dispatch(GAME_END(2));
			}
		}
	}, [crossMove, gameEnd, dispatch, CheckGame, Xfields, Ofields]);

	return InterfaceMaker();
};
