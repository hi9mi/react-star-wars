import React from 'react';

import UiButton, { UiButtonProps } from './UiButton';
import { Story } from '@storybook/react';
import { Themes } from '@context/ThemeProvider';

export default {
	title: 'Ui-Kit/UiButton',
	component: UiButton,
};

const Template: Story<UiButtonProps> = (args) => <UiButton {...args} />;

const props = {
	text: 'Hello',
	onClick: () => console.log('Button Click'),
	disabled: false,
	theme: Themes.THEME_DARK,
	classes: '',
};

export const Light = Template.bind({});

Light.args = {
	...props,
	theme: Themes.THEME_LIGHT,
};

export const Dark = Template.bind({});

Dark.args = {
	...props,
	theme: Themes.THEME_DARK,
};

export const Disabled = Template.bind({});

Disabled.args = {
	...props,
	disabled: true,
	theme: Themes.THEME_DARK,
};
