import React from 'react';
import { Story } from '@storybook/react';

import UiVideo, { UiVideoProps } from './UiVideo';
import video from './video/video.mp4';

export default {
	title: 'Ui-Kit/UiVideo',
	component: UiVideo,
};

const Template: Story<UiVideoProps> = (args) => <UiVideo {...args} />;

const props = {
	src: video,
	classes: '',
	playbackRate: 1.0,
};

export const Default = Template.bind({});

Default.args = {
	...props,
};
