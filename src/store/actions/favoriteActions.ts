import {
	FavoriteActionTypes,
	RemovePersonFromFavoriteInterface,
	SetPersonToFavoriteInterface,
} from '@store/constants/actionTypes';

import { PersonFavoriteType } from '@store/types';

export const setPersonToFavorite = (person: PersonFavoriteType): SetPersonToFavoriteInterface => ({
	type: FavoriteActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: person,
});

export const removePersonFromFavorite = (id: string): RemovePersonFromFavoriteInterface => ({
	type: FavoriteActionTypes.REMOVE_PERSON_FROM_FAVORITE,
	payload: id,
});
