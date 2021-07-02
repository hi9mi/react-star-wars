import { IPersonResponse } from 'types/personTypes';

export interface IResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPersonResponse[];
}
