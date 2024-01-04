import { useSelector } from 'react-redux';
import styles from './CnC.module.css';
import { store } from './Store';

export const GameInfo = () => {
	const {
		gameEnd,
		setGameEnd,
		setXfields,
		setOfields,
		crossMove,
		setCrossMove,
		fields,
	} = store.getState();

	// const gameEnd = useSelector((state) => state.gameEnd);
	// const setGameEnd = useSelector((state) => state.setGameEnd);
	// const setXfields = useSelector((state) => state.setXfields);
	// const setOfields = useSelector((state) => state.setOfields);
	// const crossMove = useSelector((state) => state.crossMove);
	// const setCrossMove = useSelector((state) => state.setCrossMove);
	// const fields = useSelector((state) => state.fields);

	const restartGame = () => {
		setCrossMove(true);
		setXfields(``);
		setOfields(``);
		setGameEnd(false);
		fields.forEach((field) => {
			field.className = `defaultField`;
		});
	};

	return (
		<div>
			<div hidden={!gameEnd}>
				<p hidden={!gameEnd} className={styles.menu}>
					Win: {crossMove ? `o` : `x`}
					<button
						className={styles.buttonRestart}
						onClick={() => {
							restartGame();
						}}
					>
						restart
					</button>
				</p>
			</div>

			<div hidden={gameEnd}>
				<p className={styles.menu}>
					play: {crossMove ? `x` : `o`}
					<button
						className={styles.buttonRestart}
						onClick={() => {
							restartGame();
						}}
					>
						restart
					</button>
				</p>
			</div>
		</div>
	);
};
