import React from 'react';
import { Link } from 'react-router-dom';

import { IPerson } from 'types/personTypes';

import styles from './PeopleList.module.css';

interface PeopleListProps {
	people: IPerson[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }) => {
	return (
		<ul className={styles.list__container}>
			{people.map(({ id, name, img }) => (
				<li className={styles.list__item} key={id}>
					<Link to={`/people/${id}`}>
						<img className={styles.person__photo} src={img} alt={name} />
						<p>{name}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default PeopleList;
