import { useState, useEffect } from 'react';
import { InterFaceMaker } from './Interface';
import { checkGame } from './PlayGame';
import { store } from './CreateStore';

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

const fields = [
	{
		id: 1,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 2,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 3,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 4,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 5,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 6,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 7,
		symbol: ``,
		className: `defaultField`,
	},
	{
		id: 8,
		symbol: ` `,
		className: `defaultField`,
	},
	{
		id: 9,
		symbol: ` `,
		className: `defaultField`,
	},
];

export const CrossesNCircles = () => {
	const [gameEnd, setGameEnd] = useState(false);
	const [crossMove, setCrossMove] = useState(true);
	const [Xfields, setXfields] = useState(``);
	const [Ofields, setOfields] = useState(``);
	const [winCombo, setWinCombo] = useState(``);

	store.dispatch({
		type: 'SET_ALL_DATA',
		payload: {
			fields,
			crossMove,
			setCrossMove,
			Xfields,
			setXfields,
			Ofields,
			setOfields,
			gameEnd,
			setGameEnd,
			winCombo,
		},
	});

	console.log(store.getState({ fields }));
	useEffect(() => {
		switch (crossMove) {
			case true:
				if (gameEnd !== true) {
					setGameEnd(checkGame(Ofields, setWinCombo));
				}
				break;
			case false:
				if (gameEnd !== true) {
					setGameEnd(checkGame(Xfields, setWinCombo));
				}
				break;
			default:
		}
	}, [crossMove, gameEnd, Xfields, Ofields]);

	return InterFaceMaker(
		fields,
		crossMove,
		setCrossMove,
		Xfields,
		setXfields,
		Ofields,
		setOfields,
		gameEnd,
		setGameEnd,
		winCombo,
	);
};
