import { Action } from 'redux';

import { PersonFavoriteState } from '@ducks/favoritePerson/contracts/state';

export enum FavoriteActionTypes {
	ADD_PERSON_TO_FAVORITE = 'favorite/ADD_PERSON_TO_FAVORITE',
	REMOVE_PERSON_FROM_FAVORITE = 'favorite/REMOVE_PERSON_FROM_FAVORITE',
}

export interface SetPersonToFavoriteInterface extends Action<FavoriteActionTypes> {
	type: FavoriteActionTypes.ADD_PERSON_TO_FAVORITE;
	payload: PersonFavoriteState;
}
export interface RemovePersonFromFavoriteInterface extends Action<FavoriteActionTypes> {
	type: FavoriteActionTypes.REMOVE_PERSON_FROM_FAVORITE;
	payload: string;
}

export type PersonFavoriteActions =
	| SetPersonToFavoriteInterface
	| RemovePersonFromFavoriteInterface;
