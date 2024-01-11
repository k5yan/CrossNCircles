const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action || {};

	switch (type) {
		case 'SET_ALL_DATA': {
			return payload;
		}
		case 'SET_X_FIELDS': {
			state.setXfields(state.Xfields + payload);
			break;
		}
		case 'SET_O_FIELDS': {
			state.setOfields(state.Ofields + payload);
			break;
		}
		case 'SET_CROSSMOVE': {
			state.setCrossMove((prevMove) => !prevMove);
			break;
		}
		case 'SET_GAME_END': {
			state.setGameEnd(payload);
			break;
		}
		default:
	}
	//после заполнения поля, оно остается кликабельным
	//смотри, как заблокировал поля после завершения игры
};
