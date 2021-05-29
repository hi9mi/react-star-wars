import React from 'react';
import cn from 'classnames';

import { useTheme, Themes } from '@context/ThemeProvider';

import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

import styles from './ChooseSide.module.css';

interface ChooseSideItemProps {
	theme: Themes;
	text: string;
	img: string;
	classes: string;
}

const ChooseSideItem: React.FC<ChooseSideItemProps> = ({ theme, text, img, classes }) => {
	const isTheme = useTheme();

	return (
		<div onClick={() => isTheme.change(theme)} className={cn(styles.item, classes)}>
			<div className={styles.item__header}>{text}</div>
			<img className={styles.item__img} src={img} alt={text} />
		</div>
	);
};

const ChooseSide: React.FC = () => {
	const elemets = [
		{
			theme: Themes.THEME_LIGHT,
			text: 'Light Side',
			img: imgLightSide,
			classes: styles.item__light,
		},
		{
			theme: Themes.THEME_DARK,
			text: 'Dark Side',
			img: imgDarkSide,
			classes: styles.item__dark,
		},
		{
			theme: Themes.THEME_NEITRAL,
			text: "I'm Han Solo",
			img: imgFalcon,
			classes: styles.item__neitral,
		},
	];

	return (
		<div className={styles.container}>
			{elemets.map(({ theme, text, img, classes }) => (
				<ChooseSideItem key={theme} theme={theme} text={text} img={img} classes={classes} />
			))}
		</div>
	);
};

export default ChooseSide;
