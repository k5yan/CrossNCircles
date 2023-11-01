import styles from './CnC.module.css';
export const GameInfo = (props) => {
	const restartGame = () => {
		props.setCrossMove(true);
		props.setXfields(``);
		props.setOfields(``);
		props.setGameEnd(false);
		props.fields.forEach((field) => {
			field.className = `defaultField`;
		});
	};

	return (
		<div>
			<div hidden={!props.gameEnd}>
				<p hidden={!props.gameEnd} className={styles.menu}>
					Win: {props.crossMove ? `o` : `x`}
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

			<div hidden={props.gameEnd}>
				<p className={styles.menu}>
					play: {props.crossMove ? `x` : `o`}
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
