import styles from './CnC.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectGameEnd } from './selectors';

export const GameInfo = () => {
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const dispatch = useDispatch();

	// const restartGame = () => {
	// 	setCrossMove(true);
	// 	dispatch({ type: `SET_X_FIELDS`, payload: `` });
	// 	dispatch({ type: `SET_O_FIELDS`, payload: `` });
	// 	dispatch({ type: `SET_GAME_END`, payload: false });
	// 	fields.forEach((field) => {
	// 		field.className = `defaultField`;
	// 	});
	// };

	return (
		<div>
			<div hidden={!gameEnd}>
				<p hidden={!gameEnd} className={styles.menu}>
					Win: {crossMove ? `o` : `x`}
					<button
						className={styles.buttonRestart}
						onClick={() => {
							dispatch({ type: 'RESTART_GAME' });
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
							dispatch({ type: 'RESTART_GAME' });
						}}
					>
						restart
					</button>
				</p>
			</div>
		</div>
	);
};
