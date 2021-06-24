import {
	GUIDE_IMG_EXTENSION,
	SWAPI_PEOPLE,
	SWAPI_ROOT,
	URL_IMG_PERSON,
	SWAPI_PARAM_PAGE,
	HTTPS,
} from '@constants/api';

export const getPeoplePageId = (url: string): number => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
	return +id;
};

const getId = (url: string, category: string): string => {
	const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '');
	return id;
};

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id: number): string =>
	`${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
