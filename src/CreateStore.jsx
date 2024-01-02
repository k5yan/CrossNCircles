import { appReducer } from './reducer';

const CreateStore = (reducer) => {
	let store;

	return {
		dispatch: (action) => {
			store = reducer(store, action);
		},
		getState: () => store,
	};
};

export const store = CreateStore(appReducer);
store.dispatch({});
