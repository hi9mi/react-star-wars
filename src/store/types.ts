export type PersonFavoriteType = Record<string, { name: string; img: string }>;

export enum LoadingStatus {
	LOADING = 'LOADING',
	LOADED = 'LOADED',
	NEVER = 'NEVER',
}

export interface IPerson {
	id: string;
	name: string;
	img: string;
}

export type FilmType = { episode_id: number; title: string };

export type PersonInfoType = { title: string; data: string };

export interface IPersonResponse {
	name: string;
	birth_year: string;
	eye_color: string;
	films: string[];
	gender: string;
	hair_color: string;
	height: string;
	mass: string;
	skin_color: string;
	url: string;
}

export interface IResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPersonResponse[];
}
