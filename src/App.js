import { CrossesNCircles } from './CnC';
import { Provider } from 'react-redux';
import { store } from './redux-store';
export function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<CrossesNCircles />
			</Provider>
		</div>
	);
}
