import React from 'react';

import { changeCssVariables } from '@services/changeCssVariables';

export enum Themes {
	THEME_LIGHT = 'light',
	THEME_DARK = 'dark',
	THEME_NEITRAL = 'neitral',
}

type MainContextProps = {
	theme: Themes | null;
	change: (name: Themes) => void;
};

const ThemeContext = React.createContext<MainContextProps>({} as MainContextProps);

const ThemeProvider: React.FC = ({ children, ...props }) => {
	const [theme, setTheme] = React.useState<null | Themes>(null);

	const change = (name: Themes): void => {
		setTheme(name);
		changeCssVariables(name);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				change,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useTheme = (): MainContextProps => React.useContext(ThemeContext);
