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
			state.setOfields(state.Xfields + payload);
			break;
		}
		default:
	}
};
