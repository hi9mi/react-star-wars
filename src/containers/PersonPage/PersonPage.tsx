import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import { useTypedSelector } from '@hooks/useTypedSelector';
import UiLoading from '@ui/UiLoading';
import { IPersonResponse, PersonInfoType } from '@store/types';
import { getApiResource } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

interface RouterProps {
	id: string;
}

interface PersonPageProps extends RouteComponentProps<RouterProps> {
	setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonPage: React.FC<PersonPageProps> = ({ match, setErrorApi }) => {
	const [personId, setPersonId] = React.useState<string | null>(null);
	const [personInfo, setPersonInfo] = React.useState<PersonInfoType[] | null>(null);
	const [personName, setPersonName] = React.useState<IPersonResponse['name'] | null>(null);
	const [personPhoto, setPersonPhoto] = React.useState<string | null>(null);
	const [personFilms, setPersonFilms] = React.useState<IPersonResponse['films'] | null>(null);
	const [personFavorite, setPersonFavorite] = React.useState(false);

	const favorites = useTypedSelector((state) => state.favorites);

	React.useEffect(() => {
		(async () => {
			const id = match.params.id;
			const res = (await getApiResource(`${API_PERSON}/${id}/`)) as IPersonResponse;
			console.log(res);

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
};

export default withErrorApi(PersonPage);