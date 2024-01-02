import styles from './CnC.module.css';
import { store } from './CreateStore';
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
