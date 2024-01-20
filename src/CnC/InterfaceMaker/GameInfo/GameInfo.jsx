import styles from '../../../styles/CnC.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectGameEnd } from '../../../selectors';
import { RESTART_GAME } from '../../../actions';

export const GameInfo = () => {
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const dispatch = useDispatch();
	return (
		<div>
			<div hidden={!gameEnd}>
				<p className={styles.menu}>
					Win: {crossMove ? `o` : `x`}
					<button
						className={styles.buttonRestart}
						onClick={() => {
							dispatch(RESTART_GAME);
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
							dispatch(RESTART_GAME);
						}}
					>
						restart
					</button>
				</p>
			</div>
		</div>
	);
};
