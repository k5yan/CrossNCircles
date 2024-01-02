import styles from './CnC.module.css';
import { GameInfo } from './GameInfo';
import { PlayGame } from './PlayGame';
import { WinLine } from './winLinePos';
import { store } from './CreateStore';

export const InterFaceMaker = () => {
	const { fields } = store.getState();

	return (
		<>
			<div className={styles.main}>
				<GameInfo />
				<div className={styles.table}>
					<WinLine />
					{fields.map(({ id, symbol, className }) => {
						return (
							<div
								key={id}
								className={styles[`${className}`]}
								onClick={() => PlayGame(id)}
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
