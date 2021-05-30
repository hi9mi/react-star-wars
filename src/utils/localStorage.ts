import { Themes } from '@context/ThemeProvider';
import { PersonFavoriteType } from '@store/types';

export const getLocalStorage = (key: string): PersonFavoriteType | Themes => {
	const data = localStorage.getItem(key);
	if (data !== null) {
		return JSON.parse(data);
	}
	return {};
};

export const setLocalStorage = (key: string, data: PersonFavoriteType | Themes): void => {
	localStorage.setItem(key, JSON.stringify(data));
};
