import { ThemeState } from '@ducks/theme/contracts/state';
import { ThemeActions, ThemeActionTypes } from '@ducks/theme/contracts/actionTypes';
import { getLocalStorage } from '@utils/localStorage';
import { Themes } from 'types/themeTypes';
import { LoadingStatus } from 'types/loadingTypes';

const initialState: ThemeState = {
	theme: getLocalStorage<Themes>('theme'),
	status: LoadingStatus.NEVER,
};

const themeReducer = (state = initialState, action: ThemeActions): ThemeState => {
	switch (action.type) {
		case ThemeActionTypes.ASYNC_SET_THEME:
			return {
				...state,
				theme: action.payload,
				status: LoadingStatus.LOADED,
			};

		case ThemeActionTypes.SET_THEME:
			return {
				...state,
				theme: action.payload,
			};

		case ThemeActionTypes.SET_LOADING_STATUS:
			return {
				...state,
				status: action.payload,
			};

		default:
			return state;
	}
};

export default themeReducer;
