import { RootState } from '@store/rootReducer';
import { PersonFavoriteState } from '@ducks/favoritePerson/contracts/state';

export const selectFavoritePersons = (state: RootState): PersonFavoriteState => state.favorites;
