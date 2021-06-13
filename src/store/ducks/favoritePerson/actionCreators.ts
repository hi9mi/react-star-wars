import { PersonFavoriteState } from '@ducks/favoritePerson/contracts/state';
import {
	FavoriteActionTypes,
	RemovePersonFromFavoriteInterface,
	SetPersonToFavoriteInterface,
} from '@ducks/favoritePerson/contracts/actionTypes';

export const setPersonToFavorite = (person: PersonFavoriteState): SetPersonToFavoriteInterface => ({
	type: FavoriteActionTypes.ADD_PERSON_TO_FAVORITE,
	payload: person,
});

export const removePersonFromFavorite = (id: string): RemovePersonFromFavoriteInterface => ({
	type: FavoriteActionTypes.REMOVE_PERSON_FROM_FAVORITE,
	payload: id,
});
