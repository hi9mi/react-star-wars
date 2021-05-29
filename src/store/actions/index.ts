import { ActionTypes } from '@store/constants/actionTypes';

import { PersonFavoriteType } from '@store/types';

interface SetPersonToFavoriteInterface {
	type: ActionTypes.ADD_PERSON_TO_FAVORITE;
	payload: PersonFavoriteType;
}
interface RemovePersonFromFavoriteInterface {
	type: ActionTypes.REMOVE_PERSON_FROM_FAVORITE;
	payload: string;
}

export const setPersonToFavorite = (person: PersonFavoriteType): SetPersonToFavoriteInterface => ({
	type: ActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: person,
});

export const removePersonFromFavorite = (id: string): RemovePersonFromFavoriteInterface => ({
	type: ActionTypes.REMOVE_PERSON_FROM_FAVORITE,
	payload: id,
});

export type PersonFavoriteActions =
	| SetPersonToFavoriteInterface
	| RemovePersonFromFavoriteInterface;
