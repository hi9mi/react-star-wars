import { combineReducers } from 'redux';

import favoriteReducer from '@ducks/favoritePerson/reducer';
import themeReducer from '@ducks/theme/reducer';

const rootReducer = combineReducers({
	favorites: favoriteReducer,
	theme: themeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
