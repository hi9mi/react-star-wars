import { Dispatch } from 'redux';

import {
	AsyncSetThemeActionInterface,
	SetThemeActionInterface,
	SetThemeLoadingStatusActionInterface,
	ThemeActionTypes,
} from '@ducks/theme/contracts/actionTypes';
import { LoadingStatus } from 'types/loadingTypes';
import { Themes } from 'types/themeTypes';

export const setThemeLoadingStatusAction = (
	loadingStatus: LoadingStatus
): SetThemeLoadingStatusActionInterface => ({
	type: ThemeActionTypes.SET_LOADING_STATUS,
	payload: loadingStatus,
});

export const asyncSetThemeAction = (theme: Themes) => {
	return (
		dispatch: Dispatch<AsyncSetThemeActionInterface | SetThemeLoadingStatusActionInterface>
	): void => {
		dispatch(setThemeLoadingStatusAction(LoadingStatus.LOADING));
		setTimeout(() => {
			dispatch({ type: ThemeActionTypes.ASYNC_SET_THEME, payload: theme });
		}, 500);
	};
};

export const setThemeAction = (theme: Themes): SetThemeActionInterface => ({
	type: ThemeActionTypes.SET_THEME,
	payload: theme,
});
