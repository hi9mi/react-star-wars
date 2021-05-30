import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '@store/reducers';
import { setLocalStorage } from '@utils/localStorage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
	setLocalStorage('store', store.getState().favorites);
	setLocalStorage('theme', store.getState().theme.theme);
});

export default store;
