import { fields } from '../constants';

const initialState = {
	fields: fields,
	crossMove: true,
	Xfields: ``,
	Ofields: ``,
	gameEnd: false,
	winCombo: ``, ///доделать ничью
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'RESUME_GAME':
			return state;
		case 'RESTART_GAME':
			return {
				...initialState,
				fields: state.fields.map((field) => {
					return { id: field.id, symbol: ' ', className: `defaultField` };
				}),
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
		case 'SET_FIELD_STATUS':
			return {
				...state,
				fields: payload,
			};
		case 'SET_WIN_COMBINATION':
			return {
				...state,
				winCombo: payload,
			};
		case 'CHANGE_WHO_PLAYING':
			return {
				...state,
				crossMove: !state.crossMove,
			};
		case 'GAME_END':
			return {
				...state,
				gameEnd: true,
			};
		default:
			return state;
	}
};
