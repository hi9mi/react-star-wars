import { Themes } from '@context/ThemeProvider';
import { LoadingStatus, PersonFavoriteType } from '@store/types';

// FAVORITE ACTION TYPES

export enum FavoriteActionTypes {
	ADD_PERSON_TO_FAVORITE = 'favorite/ADD_PERSON_TO_FAVORITE',
	REMOVE_PERSON_FROM_FAVORITE = 'favorite/REMOVE_PERSON_FROM_FAVORITE',
}

export interface SetPersonToFavoriteInterface {
	type: FavoriteActionTypes.ADD_PERSON_TO_FAVORITE;
	payload: PersonFavoriteType;
}
export interface RemovePersonFromFavoriteInterface {
	type: FavoriteActionTypes.REMOVE_PERSON_FROM_FAVORITE;
	payload: string;
}

export type PersonFavoriteActions =
	| SetPersonToFavoriteInterface
	| RemovePersonFromFavoriteInterface;

// THEME ACTION TYPES

export enum ThemeActionTypes {
	ASYNC_SET_THEME = 'theme/ASYNC_SET_THEME',
	SET_THEME = 'theme/SET_THEME',
	SET_LOADING_STATUS = 'theme/SET_LOADING_STATUS',
}

export interface AsyncSetThemeActionInterface {
	type: ThemeActionTypes.ASYNC_SET_THEME;
	payload: Themes;
}

export interface SetThemeActionInterface {
	type: ThemeActionTypes.SET_THEME;
	payload: Themes;
}

export interface SetThemeLoadingStatusActionInterface {
	type: ThemeActionTypes.SET_LOADING_STATUS;
	payload: LoadingStatus;
}

export type ThemeActions =
	| AsyncSetThemeActionInterface
	| SetThemeLoadingStatusActionInterface
	| SetThemeActionInterface;
