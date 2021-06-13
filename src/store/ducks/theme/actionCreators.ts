import { Dispatch } from 'redux';

import { Themes } from '@context/ThemeProvider';
import { LoadingStatus } from '@store/types';
import {
	AsyncSetThemeActionInterface,
	SetThemeActionInterface,
	SetThemeLoadingStatusActionInterface,
	ThemeActionTypes,
} from '@ducks/theme/contracts/actionTypes';

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
