import styles from '../../styles/CnC.module.css';
import { GameInfo } from './GameInfo';
import { usePlayGame } from '../../hooks';
import { WinLine } from './WinLine';
import { useSelector } from 'react-redux';
import { selectFields } from '../../selectors';

export const InterfaceMaker = () => {
	const fields = useSelector(selectFields);
	const play = usePlayGame();
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
								onClick={() => {
									play(id);
								}}
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
