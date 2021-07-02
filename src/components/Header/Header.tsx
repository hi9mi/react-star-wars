import React from 'react';
import { NavLink } from 'react-router-dom';

import Favorite from '@components/Favorite';
import { useTheme } from '@context/ThemeProvider';
import { Themes } from 'types/themeTypes';

import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import styles from './Header.module.css';

const Header: React.FC = () => {
	const [icon, setIcon] = React.useState(imgSpaceStation);
	const isTheme = useTheme();

	React.useEffect(() => {
		switch (isTheme.theme) {
			case Themes.THEME_LIGHT:
				setIcon(imgLightsaber);
				break;
			case Themes.THEME_DARK:
				setIcon(imgSpaceStation);
				break;
			case Themes.THEME_NEITRAL:
				setIcon(imgDroid);
				break;
			default:
				setIcon(imgSpaceStation);
		}
	}, [isTheme]);

	return (
		<div className={styles.container}>
			<img className={styles.logo} src={icon} alt="Star Wars Logo" />
			<ul className={styles.list__container}>
				<li>
					<NavLink to="/" exact>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/people/?page=1">People</NavLink>
				</li>
				<li>
					<NavLink to="/not-found" exact>
						Not Found
					</NavLink>
				</li>
				<li>
					<NavLink to="/search" exact>
						Search
					</NavLink>
				</li>
				<li>
					<NavLink to="/fail" exact>
						Fail
					</NavLink>
				</li>
			</ul>
			<Favorite />
		</div>
	);
};

export default Header;
