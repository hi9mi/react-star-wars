import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '@store/rootReducer';
import { setLocalStorage } from '@utils/localStorage';
import { PersonFavoriteType } from 'types/personTypes';
import { Themes } from 'types/themeTypes';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
	setLocalStorage<PersonFavoriteType>('store', store.getState().favorites);
	setLocalStorage<Themes>('theme', store.getState().theme.theme);
});

export default store;
