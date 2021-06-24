import React from 'react';

import ErrorMessage from '@components/ErrorMessage';

interface ErrorApiProps {
	setErrorApi: React.Dispatch<React.SetStateAction<boolean>>;
}

export const withErrorApi = <P extends {}>(View: React.ComponentType<P & ErrorApiProps>) => {
	return (props: P): JSX.Element => {
		const [errorApi, setErrorApi] = React.useState(false);

		return <>{errorApi ? <ErrorMessage /> : <View {...props} setErrorApi={setErrorApi} />}</>;
	};
};
