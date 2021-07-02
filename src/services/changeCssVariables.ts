/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

import { Themes } from 'types/themeTypes';

export const changeCssVariables = (theme: Themes): void => {
	const root = document.querySelector(':root') as HTMLElement;

	const cssVariables = ['header', 'bgimage'];

	cssVariables.forEach((element) => {
		root.style.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`);
	});
};
