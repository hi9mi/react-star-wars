import { RootState } from '@store/rootReducer';
import { LoadingStatus } from 'types/loadingTypes';
import { Themes } from 'types/themeTypes';

export const selectTheme = (state: RootState): Themes => state.theme.theme;

export const selectThemeStatus = (state: RootState): LoadingStatus => state.theme.status;
