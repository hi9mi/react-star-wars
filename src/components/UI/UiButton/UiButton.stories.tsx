import React from 'react';
import { Story } from '@storybook/react';

import UiButton, { UiButtonProps } from './UiButton';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton,
};

const Template: Story<UiButtonProps> = (args) => <UiButton {...args} />;

const props = {
	text: 'Hello',
	onClick: () => console.log('Button Click'),
	disabled: false,
	theme: 'dark',
	classes: '',
};

export const Light = Template.bind({});

Light.args = {
	...props,
	theme: 'light',
};

export const Dark = Template.bind({});

Dark.args = {
	...props,
	theme: 'dark',
};

export const Disabled = Template.bind({});

Disabled.args = {
	...props,
	disabled: true,
};
