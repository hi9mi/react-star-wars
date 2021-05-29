import React from 'react';
import { Story } from '@storybook/react';

import UiLoading, { UiLoadingProps } from './UiLoading';

export default {
	title: 'Ui-Kit/UiLoading',
	component: UiLoading,
};

const Template: Story<UiLoadingProps> = (args) => <UiLoading {...args} />;

const props = {
	theme: 'black',
	isShadow: false,
	classes: '',
};

export const Black = Template.bind({});

Black.args = {
	...props,
	theme: 'black',
};

export const White = Template.bind({});

White.args = {
	...props,
	theme: 'white',
	isShadow: true,
};

export const Blue = Template.bind({});

Blue.args = {
	...props,
	theme: 'blue',
};
