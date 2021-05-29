import React from 'react';
import { Link } from 'react-router-dom';

import UiButton from '@ui/UiButton';

import styles from './PeopleNavigation.module.css';

interface PeopleNavigationProps {
	getResource: (url: string) => Promise<void>;
	prevPage: string | null;
	nextPage: string | null;
	counterPage: number;
}

const PeopleNavigation: React.FC<PeopleNavigationProps> = ({
	getResource,
	prevPage,
	nextPage,
	counterPage,
}) => {
	const handleChangeNext = (): Promise<void> => getResource(nextPage as string);
	const handleChangePrev = (): Promise<void> => getResource(prevPage as string);

	return (
		<div className={styles.container}>
			<Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
				<UiButton text="Previous" onClick={handleChangePrev} disabled={!prevPage} />
			</Link>
			<Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
				<UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
			</Link>
		</div>
	);
};

export default PeopleNavigation;
