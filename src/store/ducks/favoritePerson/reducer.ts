import { omit } from 'lodash';

import {
	FavoriteActionTypes,
	PersonFavoriteActions,
} from '@ducks/favoritePerson/contracts/actionTypes';
import { PersonFavoriteState } from '@ducks/favoritePerson/contracts/state';
import { getLocalStorage } from '@utils/localStorage';

const initialState: PersonFavoriteState = getLocalStorage<PersonFavoriteState>('store');

const favoriteReducer = (
	state = initialState,
	action: PersonFavoriteActions
): PersonFavoriteState => {
	switch (action.type) {
		case FavoriteActionTypes.ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case FavoriteActionTypes.REMOVE_PERSON_FROM_FAVORITE:
			return omit(state, [action.payload]);
		default:
			return state;
	}
};

export default favoriteReducer;
