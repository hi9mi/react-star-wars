import React from 'react';

import { PersonInfoType } from 'types/personTypes';

import styles from './PersonInfo.module.css';

interface PersonInfoProps {
	info: PersonInfoType[];
}

const PersonInfo: React.FC<PersonInfoProps> = ({ info }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<ul className={styles.list__container}>
					{info.map(
						({ title, data }) =>
							data && (
								<li className={styles.list__item} key={title}>
									<span className={styles.item__title}>{title}</span>: {data}
								</li>
							)
					)}
				</ul>
			</div>
		</>
	);
};

export default PersonInfo;
