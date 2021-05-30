import React from 'react';
import cn from 'classnames';

import '../index.css';
import styles from './UiButton.module.css';

export interface UiButtonProps {
	text: string;
	onClick: () => void | Promise<void>;
	disabled: boolean;
	theme?: string;
	classes?: string;
}

const UiButton: React.FC<UiButtonProps> = ({
	text,
	onClick,
	disabled,
	theme = 'dark',
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
