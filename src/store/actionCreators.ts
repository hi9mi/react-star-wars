import * as favoriteActions from '@ducks/theme/actionCreators';
import * as themeActions from '@ducks/favoritePerson/actionCreators';

export default {
	...themeActions,
	...favoriteActions,
};
