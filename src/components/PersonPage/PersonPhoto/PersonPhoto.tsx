import React from 'react';

import { useActions } from '@hooks/useActions';
import iconFavoriteFill from './img/favorite-fill.svg';
import iconFavorite from './img/favorite.svg';

import styles from './PersonPhoto.module.css';

interface PersonPhotoProps {
	id: string | null;
	photo: string | null;
	name: string | null;
	isFavorite: boolean;
	setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonPhoto: React.FC<PersonPhotoProps> = ({
	id,
	photo,
	name,
	isFavorite,
	setIsFavorite,
}) => {
	const { setPersonToFavorite, removePersonFromFavorite } = useActions();

	const dispatchFavoritePeople = (): void => {
		if (isFavorite && id) {
			removePersonFromFavorite(id);
			setIsFavorite(false);
		}
		if (!isFavorite && id && name && photo) {
			setPersonToFavorite({ [id]: { name, img: photo } });
			setIsFavorite(true);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={photo as string} alt={name as string} />
				<img
					onClick={dispatchFavoritePeople}
					src={isFavorite ? iconFavoriteFill : iconFavorite}
					className={styles.favorite}
					alt="Add to favorite"
				/>
			</div>
		</>
	);
};

export default PersonPhoto;
