import { useDispatch, useSelector } from 'react-redux';
import styles from './CnC.module.css';

export const GameInfo = () => {
	const dispatch = useDispatch();
	const crossMove = useSelector((state) => state.crossMove);
	const setCrossMove = useSelector((state) => state.setCrossMove);
	const fields = useSelector((state) => state.fields);
	const gameEnd = useSelector((state) => state.gameEnd);

	const restartGame = () => {
		setCrossMove(true);
		dispatch({ type: `SET_X_FIELDS`, payload: `` });
		dispatch({ type: `SET_O_FIELDS`, payload: `` });
		dispatch({ type: `SET_GAME_END`, payload: false });
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
