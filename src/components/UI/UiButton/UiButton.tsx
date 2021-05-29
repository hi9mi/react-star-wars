import React from 'react';
import cn from 'classnames';

import { Themes } from '@context/ThemeProvider';

import '../index.css';
import styles from './UiButton.module.css';

export interface UiButtonProps {
	text: string;
	onClick: () => void | Promise<void>;
	disabled: boolean;
	theme?: Exclude<Themes, Themes.THEME_NEITRAL>;
	classes?: string;
}

const UiButton: React.FC<UiButtonProps> = ({
	text,
	onClick,
	disabled,
	theme = Themes.THEME_DARK,
	classes,
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(styles.button, styles[theme], classes)}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default UiButton;
