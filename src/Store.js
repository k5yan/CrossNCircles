import { appReducer } from './reducer';
import { CreateStore } from './CreateStore';

export const store = CreateStore(appReducer);
store.dispatch({});
