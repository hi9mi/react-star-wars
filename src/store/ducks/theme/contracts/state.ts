import { Themes } from '@context/ThemeProvider';
import { LoadingStatus } from '@store/types';

export interface ThemeState {
	theme: Themes;
	status: LoadingStatus;
}
