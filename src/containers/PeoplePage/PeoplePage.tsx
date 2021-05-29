import React from 'react';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResource, changeHTTP } from '@utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { API_PEOPLE } from '@constants/api';
import { useQueryParams } from '@hooks/useQueryParams';
import { IPerson, IResponse } from '@store/types';

interface PeoplePageProps {
	setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

const PeoplePage: React.FC<PeoplePageProps> = ({ setErrorApi }) => {
	const [people, setPeople] = React.useState<IPerson[] | null>(null);
	const [prevPage, setPrevPage] = React.useState<string | null>(null);
	const [nextPage, setNextPage] = React.useState<string | null>(null);
	const [counterPage, setCounterPage] = React.useState(1);

	const query = useQueryParams();
	const queryPage = query.get('page');

	const getResource = async (url: string): Promise<void> => {
		const res = (await getApiResource(url)) as IResponse;

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImage(+id);
				return {
					id,
					name,
					img,
				};
			});

			res.previous && setPrevPage(changeHTTP(res.previous));
			res.next && setNextPage(changeHTTP(res.next));
			setCounterPage(getPeoplePageId(url));
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	React.useEffect(() => {
		getResource(API_PEOPLE + queryPage);
	}, []);

	return (
		<>
			<PeopleNavigation
				getResource={getResource}
				prevPage={prevPage}
				nextPage={nextPage}
				counterPage={counterPage}
			/>
			{people && <PeopleList people={people} />}
		</>
	);
};

export default withErrorApi(PeoplePage);
