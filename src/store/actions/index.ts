import * as favoriteActions from '@store/actions/favoriteActions';
import * as themeActions from '@store/actions/themeActions';

export default {
	...themeActions,
	...favoriteActions,
};
