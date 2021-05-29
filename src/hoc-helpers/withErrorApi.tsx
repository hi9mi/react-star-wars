import React from 'react';

import ErrorMessage from '@components/ErrorMessage';

export const withErrorApi = <P extends {}>(View: React.ComponentType<P>) => {
	return (props: P): JSX.Element => {
		const [errorApi, setErrorApi] = React.useState(false);

		return <>{errorApi ? <ErrorMessage /> : <View setErrorApi={setErrorApi} {...props} />}</>;
	};
};
