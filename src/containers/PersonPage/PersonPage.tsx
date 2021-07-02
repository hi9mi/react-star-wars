import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@ui/UiLoading';
import { selectFavoritePersons } from '@ducks/favoritePerson/selector';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';
import { IPersonResponse, PersonInfoType } from 'types/personTypes';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

interface RouterProps {
	id: string;
}

export type PersonPageProps = RouteComponentProps<RouterProps>;

const PersonPage: React.FC<PersonPageProps> = withErrorApi(({ match, setErrorApi }) => {
	const [personId, setPersonId] = React.useState<string | null>(null);
	const [personInfo, setPersonInfo] = React.useState<PersonInfoType[] | null>(null);
	const [personName, setPersonName] = React.useState<IPersonResponse['name'] | null>(null);
	const [personPhoto, setPersonPhoto] = React.useState<string | null>(null);
	const [personFilms, setPersonFilms] = React.useState<IPersonResponse['films'] | null>(null);
	const [personFavorite, setPersonFavorite] = React.useState(false);

	const favorites = useSelector(selectFavoritePersons);

	React.useEffect(() => {
		(async () => {
			const id = match.params.id;
			const res = await getApiResource<IPersonResponse>(`${API_PERSON}/${id}/`);

			setPersonFavorite(!!favorites[id]);
			if (res) {
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Skin Color', data: res.skin_color },
					{ title: 'Hair Color', data: res.hair_color },
					{ title: 'Eye Color', data: res.eye_color },
					{ title: 'Birth Year', data: res.birth_year },
					{ title: 'Gender', data: res.gender },
				]);
				setPersonId(id);
				setPersonName(res.name);
				setPersonPhoto(getPeopleImage(+id));
				res.films.length && setPersonFilms(res.films);
				setErrorApi(false);
			} else {
				setErrorApi(true);
			}
		})();
	}, []);

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto
						id={personId}
						photo={personPhoto}
						name={personName}
						isFavorite={personFavorite}
						setIsFavorite={setPersonFavorite}
					/>
					{personInfo && <PersonInfo info={personInfo} />}
					{personFilms && (
						<React.Suspense fallback={<UiLoading theme="white" isShadow />}>
							<PersonFilms films={personFilms} />
						</React.Suspense>
					)}
				</div>
			</div>
		</>
	);
});

export default PersonPage;
