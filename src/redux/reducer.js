import { fields } from '../fields/fields';
const initialState = {
	fields: fields,
	crossMove: true,
	Xfields: ``,
	Ofields: ``,
	gameEnd: false,
	winCombo: ``,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action || {};

	switch (type) {
		case 'SET_ALL_DATA':
			return payload;
		case 'GAME_END':
			return {
				...state,
				gameEnd: true,
			};
		case 'RESTART_GAME':
			return initialState;
		case 'CHANGE_WHO_PLAYING':
			return {
				...state,
				crossMove: payload, ///
			};
		case 'SET_X_FIELDS':
			return {
				...state,
				Xfields: state.Xfields + payload,
			};
		case 'SET_O_FIELDS':
			return {
				...state,
				Ofields: state.Ofields + payload,
			};
		case 'SET_WIN_COMBINATION':
			return {
				...state,
				winCombo: payload,
			};
		case 'SET_FIELD_STATUS':
			return {
				...state,
				fields: payload,
			};
		default:
	}
	//после заполнения поля, оно остается кликабельным
	//смотри, как заблокировал поля после завершения игры
};
