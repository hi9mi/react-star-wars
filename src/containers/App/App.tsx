import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from '@components/Header';
import routesConfig from '@routes/routesConfig';

import styles from './App.module.css';

const App: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Switch>
				{routesConfig.map((route, index) => (
					<Route key={index} path={route.path} component={route.component} exact={route.exact} />
				))}
			</Switch>
		</div>
	);
};

export default App;
