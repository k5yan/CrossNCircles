import styles from './CnC.module.css';

export const WinLine = (props) => {
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
				hidden={!props.gameEnd}
				className={`${styles.winLine} ${styles[linePoses[props.winCombo]]}`}
			></div>
		</>
	);
};
