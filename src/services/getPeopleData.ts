import {
	GUIDE_IMG_EXTENSION,
	HTTP,
	SWAPI_PEOPLE,
	SWAPI_ROOT,
	URL_IMG_PERSON,
	SWAPI_PARAM_PAGE,
} from '@constants/api';

export const getPeoplePageId = (url: string): number => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
	return +id;
};

const getId = (url: string, category: string): string => {
	const id = url.replace(HTTP + SWAPI_ROOT + category, '').replace(/\//g, '');
	return id;
};

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id: number): string =>
	`${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
