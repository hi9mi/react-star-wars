export type PersonFavoriteType = Record<string, { name: string; img: string }>;

export interface IPerson {
	id: string;
	name: string;
	img: string;
}

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
