import { omit } from 'lodash';

import { FavoriteActionTypes, PersonFavoriteActions } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';
import { PersonFavoriteType } from '@store/types';

const initialState: PersonFavoriteType = getLocalStorage<PersonFavoriteType>('store');

const favoriteReducer = (
	state = initialState,
	action: PersonFavoriteActions
): PersonFavoriteType => {
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
