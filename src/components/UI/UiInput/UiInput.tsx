import React from 'react';
import cn from 'classnames';

import icon from './img/cancel.svg';

import '../index.css';
import styles from './UiInput.module.css';

export interface UiInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
	type: string;
	classes?: string;
}

const UiInput: React.FC<UiInputProps> = ({ value, onChange, placeholder, type, classes }) => (
	<div className={cn(styles.wrapper__input, classes)}>
		<input
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className={styles.input}
		/>
		<img
			onClick={() => value && onChange('')}
			src={icon}
			className={cn(styles.clear, !value && styles.clear__disabled)}
			alt="Clear"
		/>
	</div>
);

export default UiInput;
