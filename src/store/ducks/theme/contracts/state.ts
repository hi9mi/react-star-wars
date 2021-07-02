import { LoadingStatus } from 'types/loadingTypes';
import { Themes } from 'types/themeTypes';

export interface ThemeState {
	theme: Themes;
	status: LoadingStatus;
}
