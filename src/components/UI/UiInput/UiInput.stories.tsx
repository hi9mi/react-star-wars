import React from 'react';
import { Story } from '@storybook/react';

import UiInput, { UiInputProps } from './UiInput';

export default {
	title: 'Ui-Kit/UiInput',
	component: UiInput,
};

const Template: Story<UiInputProps> = (args) => {
	const [value, setValue] = React.useState('');

	const handleInputChange = (value: string): void => {
		setValue(value);
	};
	return <UiInput {...args} value={value} onChange={handleInputChange} />;
};

const props = {
	value: '',
	onChange: () => console.log('Input change'),
	placeholder: 'Placeholder',
	type: 'text',
	classes: '',
};

export const Default = Template.bind({});

Default.args = {
	...props,
};
