import React from 'react';
import { debounce } from 'lodash';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput';
import { IPerson, IResponse } from '@store/types';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import styles from './SearchPage.module.css';

interface SearchPageProps {
	setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchPage: React.FC<SearchPageProps> = ({ setErrorApi }) => {
	const [inputSearchValue, setInputSearchValue] = React.useState('');
	const [people, setPeople] = React.useState<IPerson[]>([]);

	const getResponse = async (params: string): Promise<void> => {
		const res = (await getApiResource(API_SEARCH + params)) as IResponse;
		console.log(res);
		if (res) {
			const peopleList: IPerson[] = res.results.map(
				({ name, url }: { name: string; url: string }) => {
					const id = getPeopleId(url);
					const img = getPeopleImage(+id);
					return {
						id,
						name,
						img,
					};
				}
			);
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	React.useEffect(() => {
		getResponse('');
	}, []);

	const debouncedGetResponse = React.useCallback(
		debounce((value) => getResponse(value), 300),
		[]
	);

	const handleInputChange = (value: string): void => {
		setInputSearchValue(value);
		debouncedGetResponse(value);
	};

	return (
		<>
			<h1 className="header__text">Search</h1>
			<UiInput
				type="text"
				value={inputSearchValue}
				onChange={handleInputChange}
				placeholder="Input character's name"
				classes={styles.input__search}
			/>
			<SearchPageInfo people={people} />
		</>
	);
};

export default withErrorApi(SearchPage);