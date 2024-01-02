import styles from './CnC.module.css';
import { GameInfo } from './GameInfo';
import { PlayGame } from './PlayGame';
import { WinLine } from './winLinePos';
import { store } from './CreateStore';

export const InterFaceMaker = (
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
) => {
	// const {
	// 	fields,
	// 	crossMove,
	// 	setCrossMove,
	// 	Xfields,
	// 	setXfields,
	// 	Ofields,
	// 	setOfields,
	// 	gameEnd,
	// 	setGameEnd,
	// 	winCombo,
	// } = store.getState();

	const PlayProps = [
		fields,
		crossMove,
		setCrossMove,
		Xfields,
		setXfields,
		Ofields,
		setOfields,
		gameEnd,
	];

	const InterfaceProps = {
		gameEnd: gameEnd,
		setGameEnd: setGameEnd,
		Xfields: Xfields,
		setXfields: setXfields,
		Ofields: Ofields,
		setOfields: setOfields,
		crossMove: crossMove,
		setCrossMove: setCrossMove,
		fields: fields,
	};

	const WinLineProps = {
		gameEnd: gameEnd,
		winCombo: winCombo,
		sobaka: `sobaka`,
	};

	return (
		<>
			<div className={styles.main}>
				<GameInfo {...InterfaceProps} />
				<div className={styles.table}>
					<WinLine {...WinLineProps} />
					{fields.map(({ id, symbol, className }) => {
						return (
							<div
								key={id}
								className={styles[`${className}`]}
								onClick={() => PlayGame(id, ...PlayProps)}
							>
								<p className={styles.symbolStyle}>{symbol}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
