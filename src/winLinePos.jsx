import styles from './CnC.module.css';
import { store } from './CreateStore';

export const WinLine = () => {
	const { gameEnd, winCombo } = store.getState();

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
