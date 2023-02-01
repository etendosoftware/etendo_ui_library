import React from 'react';
import {Story, Meta} from '@storybook/react';;
import GetStartedScreen from './screens/getStarted/GetStartedScreen';
import ChangeLogScreen from './screens/changelog/ChangeLogScreen';

const meta: Meta = {
  title: 'Docs',
};

export default meta;

const Template0: Story = args => <GetStartedScreen/>;
const Template1: Story = args => <ChangeLogScreen/>;

export const GetStarted = Template0.bind({});
export const Changelog = Template1.bind({});

