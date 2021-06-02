import { HTTP, HTTPS } from '@constants/api';
import { FilmType, IPersonResponse, IResponse } from '@store/types';

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = (url: string | null): string | null => {
	const result = url ? url.replace(HTTP, HTTPS) : url;
	return result;
};

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (
	url: string
): Promise<IResponse | IPersonResponse | boolean> => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			console.error('Could not fetch.', res.status);
			return false;
		}
		return await res.json();
	} catch (error) {
		console.error('Could not fetch.', error.message);
		return false;
	}
};

export const makeConcurrentRequest = async (url: string[]): Promise<FilmType[]> => {
	const res = await Promise.all(
		url.map((res) => {
			return fetch(res as string).then((res): Promise<FilmType> => res.json());
		})
	);
	return res;
};
