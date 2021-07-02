import { Action } from 'redux';

import { Themes } from 'types/themeTypes';
import { LoadingStatus } from 'types/loadingTypes';

export enum ThemeActionTypes {
	ASYNC_SET_THEME = 'theme/ASYNC_SET_THEME',
	SET_THEME = 'theme/SET_THEME',
	SET_LOADING_STATUS = 'theme/SET_LOADING_STATUS',
}

export interface AsyncSetThemeActionInterface extends Action<ThemeActionTypes> {
	type: ThemeActionTypes.ASYNC_SET_THEME;
	payload: Themes;
}

export interface SetThemeActionInterface extends Action<ThemeActionTypes> {
	type: ThemeActionTypes.SET_THEME;
	payload: Themes;
}

export interface SetThemeLoadingStatusActionInterface extends Action<ThemeActionTypes> {
	type: ThemeActionTypes.SET_LOADING_STATUS;
	payload: LoadingStatus;
}

export type ThemeActions =
	| AsyncSetThemeActionInterface
	| SetThemeLoadingStatusActionInterface
	| SetThemeActionInterface;
