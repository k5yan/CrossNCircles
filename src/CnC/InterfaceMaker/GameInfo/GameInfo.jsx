import styles from '../../../styles/CnC.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCrossMove, selectGameEnd } from '../../../selectors';
import { RESTART_GAME } from '../../../actions';

export const GameInfo = () => {
	const crossMove = useSelector(selectCrossMove);
	const gameEnd = useSelector(selectGameEnd);
	const dispatch = useDispatch();
	const nowPlaying = {
		1: `Win: ${crossMove ? `o` : `x`}`,
		2: `Draw`,
		3: `Play: ${crossMove ? `o` : `x`}`,
	};
	return (
		<div>
			<div>
				<p className={styles.menu}>
					{nowPlaying[gameEnd]}
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
