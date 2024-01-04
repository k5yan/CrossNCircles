export const CreateStore = (reducer) => {
	let store;

	return {
		dispatch: (action) => {
			store = reducer(store, action);
		},
		getState: () => store,
	};
};
