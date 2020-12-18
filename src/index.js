import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';

import App from './components/App/App';
import store from './store';

ReactDOM.render(
	<StoreProvider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root'),
);
