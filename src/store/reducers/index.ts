import { combineReducers } from 'redux';

import favoriteReducer from '@store/reducers/favoriteReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
	favorites: favoriteReducer,
	theme: themeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
