import { combineReducers } from "redux";

import favoriteReducer from "@store/reducers/favoriteReducer";

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default rootReducer;
