import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '@store/rootReducer';
import { PersonFavoriteType } from '@store/types';
import { Themes } from '@context/ThemeProvider';
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
	setLocalStorage<PersonFavoriteType>('store', store.getState().favorites);
	setLocalStorage<Themes>('theme', store.getState().theme.theme);
});

export default store;
