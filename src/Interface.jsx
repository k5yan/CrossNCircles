import styles from './CnC.module.css';
import { GameInfo } from './GameInfo';
import { PlayGame } from './PlayGame';
import { WinLine } from './winLinePos';
import { store } from './Store';
import { useSelector, useStore } from 'react-redux';

export const InterFaceMaker = () => {
	const fields = useSelector((state) => state.fields);

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
