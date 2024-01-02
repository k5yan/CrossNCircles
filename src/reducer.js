const initialState = {};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action || {};

	switch (type) {
		case 'SET_ALL_DATA': {
			return payload;
		}
		default:
	}
};
