import { Themes } from '@context/ThemeProvider';
import { ThemeActions, ThemeActionTypes } from '@store/constants/actionTypes';
import { LoadingStatus } from '@store/types';
import { getLocalStorage } from '@utils/localStorage';

export interface ThemeState {
	theme: Themes;
	status: LoadingStatus;
}

const initialState = {
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
