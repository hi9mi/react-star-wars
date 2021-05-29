import { PersonFavoriteType } from '@store/types';

export const getLocalStorage = (key: string): PersonFavoriteType => {
	const data = localStorage.getItem(key);
	if (data !== null) {
		return JSON.parse(data);
	}
	return {};
};

export const setLocalStorage = (key: string, data: PersonFavoriteType): void => {
	localStorage.setItem(key, JSON.stringify(data));
};
