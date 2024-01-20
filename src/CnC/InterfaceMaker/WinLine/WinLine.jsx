import { useSelector } from 'react-redux';
import styles from '../../../styles/CnC.module.css';
import { selectGameEnd, selectWinCombo } from '../../../selectors';

export const WinLine = () => {
	const gameEnd = useSelector(selectGameEnd);
	const winCombo = useSelector(selectWinCombo);

	const linePoses = [
		`winLineC0`,
		`winLineC1`,
		`winLineC2`,
		`winLineC3`,
		`winLineC4`,
		`winLineC5`,
		`winLineC6`,
		`winLineC7`,
	];

	return (
		<>
			<div
				hidden={!gameEnd}
				className={`${styles.winLine} ${styles[linePoses[winCombo]]}`}
			></div>
		</>
	);
};
