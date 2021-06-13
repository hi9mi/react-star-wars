import { Themes } from '@context/ThemeProvider';
import { RootState } from '@store/rootReducer';
import { LoadingStatus } from '@store/types';

export const selectTheme = (state: RootState): Themes => state.theme.theme;

export const selectThemeStatus = (state: RootState): LoadingStatus => state.theme.status;
