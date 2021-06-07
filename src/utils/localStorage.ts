export const getLocalStorage = <T>(key: string): T => {
	const data = localStorage.getItem(key);
	if (data !== null) {
		return JSON.parse(data);
	}
	return {} as T;
};

export const setLocalStorage = <T>(key: string, data: T): void => {
	localStorage.setItem(key, JSON.stringify(data));
};
