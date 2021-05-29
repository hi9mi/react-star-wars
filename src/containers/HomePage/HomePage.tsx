import React from 'react';

import ChooseSide from '@components/HomePage/ChooseSide';

const HomePage: React.FC = () => {
	return (
		<>
			<h1 className="header__text">Home page</h1>
			<ChooseSide />
		</>
	);
};

export default HomePage;
