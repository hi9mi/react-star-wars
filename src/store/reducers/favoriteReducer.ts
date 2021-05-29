import { omit } from 'lodash';

import { ActionTypes } from '@store/constants/actionTypes';
import { getLocalStorage } from '@utils/localStorage';
import { PersonFavoriteType } from '@store/types';
import { PersonFavoriteActions } from '@store/actions';

const initialState: PersonFavoriteType = getLocalStorage('store');

const favoriteReducer = (
	state = initialState,
	action: PersonFavoriteActions
): PersonFavoriteType => {
	switch (action.type) {
		case ActionTypes.ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload,
			};
		case ActionTypes.REMOVE_PERSON_FROM_FAVORITE:
			return omit(state, [action.payload]);
		default:
			return state;
	}
};

export default favoriteReducer;
