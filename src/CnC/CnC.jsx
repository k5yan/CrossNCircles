import { useEffect } from 'react';
import { InterfaceMaker } from './InterfaceMaker/InterfaceMaker';
import { useCheckGame } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectGameEnd } from '../selectors';

export const casesToWin = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

export const CrossesNCircles = () => {
	// const [gameEnd, setGameEnd] = useState(false);
	// const [crossMove, setCrossMove] = useState(true);
	// const [Xfields, setXfields] = useState(``);
	// const [Ofields, setOfields] = useState(``);
	// const [winCombo, setWinCombo] = useState(``);
	// const dispatch = useDispatch();

	// dispatch({
	// 	type: 'SET_ALL_DATA',
	// 	payload: {
	// 		fields,
	// 		crossMove,
	// 		setCrossMove,
	// 		Xfields,
	// 		setXfields,
	// 		Ofields,
	// 		setOfields,
	// 		gameEnd,
	// 		setGameEnd,
	// 		winCombo,
	// 	},
	// });

	const dispatch = useDispatch();
	dispatch({ type: 'RESTART_GAME' });
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const CheckGame = useCheckGame();
	useEffect(() => {
		if (gameEnd !== true) {
			const gameOver = CheckGame();
			if (gameOver) {
				dispatch({ type: 'GAME_END' });
			}
		}
	}, [crossMove, gameEnd, dispatch, CheckGame]);

	return InterfaceMaker();
};
