import React from 'react';

import PeopleList from '@components/PeoplePage/PeopleList';
import { IPerson } from '@store/types';
import { useTypedSelector } from '@hooks/useTypedSelector';

import styles from './FavoritesPage.module.css';

const FavoritesPage: React.FC = () => {
	const [people, setPeople] = React.useState<IPerson[]>([]);
	const favorites = useTypedSelector((state) => state.favorites);

	React.useEffect(() => {
		const arr = Object.entries(favorites);
		if (arr.length) {
			const res = arr.map((item) => {
				return {
					id: item[0],
					...item[1],
				};
			});
			setPeople(res);
		}
	}, []);

	return (
		<>
			<h1 className="header__text">Favorite Page</h1>
			{people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No data</h2>}
		</>
	);
};

export default FavoritesPage;
