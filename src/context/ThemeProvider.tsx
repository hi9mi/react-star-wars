import React from 'react';

import { changeCssVariables } from '@services/changeCssVariables';
import { getLocalStorage } from '@utils/localStorage';
import { useActions } from '@hooks/useActions';
import { Themes } from 'types/themeTypes';

type ThemeContextProps = {
	theme: Themes | null;
	change: (name: Themes) => void;
};

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider: React.FC = ({ children, ...props }) => {
	const [theme, setTheme] = React.useState<null | Themes>(getLocalStorage<Themes>('theme'));
	const { setThemeAction } = useActions();

	const change = (name: Themes): void => {
		setThemeAction(name);
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

export const useTheme = (): ThemeContextProps => React.useContext(ThemeContext);
