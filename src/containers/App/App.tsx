import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from '@components/Header';
import routesConfig from '@routes/routesConfig';
import { changeCssVariables } from '@services/changeCssVariables';
import { getLocalStorage } from '@utils/localStorage';
import { Themes } from '@context/ThemeProvider';

import styles from './App.module.css';
import { useActions } from '@hooks/useActions';
import { LoadingStatus } from '@store/types';
import { selectTheme, selectThemeStatus } from '@ducks/theme/selector';
import UiLoading from '@components/UI/UiLoading';

const App: React.FC = () => {
	const { asyncSetThemeAction } = useActions();
	const theme = useSelector(selectTheme);
	const status = useSelector(selectThemeStatus);

	const isReady = status === LoadingStatus.LOADED;

	React.useEffect(() => {
		changeCssVariables(theme);
		asyncSetThemeAction(getLocalStorage<Themes>('theme'));
	}, []);

	if (!isReady) {
		return (
			<div className={styles.loader}>
				<UiLoading theme="white" isShadow />
			</div>
		);
	}

	return (
		<div className={styles.body}>
			<div className={styles.wrapper}>
				<Header />
				<Switch>
					{routesConfig.map((route, index) => (
						<Route key={index} path={route.path} component={route.component} exact={route.exact} />
					))}
				</Switch>
			</div>
		</div>
	);
};

export default App;