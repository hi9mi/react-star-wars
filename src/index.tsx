import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@containers/App';
import store from '@store/store';
import ThemeProvider from '@context/ThemeProvider';
import { REPO_NAME } from '@constants/repo';

import '@styles/index.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router basename={`/${REPO_NAME}/`}>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
