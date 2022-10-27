import React from 'react';
import {Story, Meta} from '@storybook/react';

import {StatusBar} from './StatusBar';
import {Info, StatusBarProps} from './StatusBar.types';

export default {
  title: 'Etendo/StatusBar',
  component: StatusBar,
  argTypes: {},
} as Meta<typeof StatusBar>;

const dataset: Info[] = [
  {
    step: '1. Vehicles',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
  {
    step: '2. Visits',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
  {
    step: '3. Routes',
    activeImage: require('../../assets/images/icons/calendar-secundary.png'),
    activeTextTop: 'Current plan date',
    activeTextBottom: '03 January, 2022',
  },
];

/* Templates */
const Template1: Story<StatusBarProps> = args => (
  <StatusBar data={dataset} step={1} />
);
const Template2: Story<StatusBarProps> = args => (
  <StatusBar data={dataset} step={2} />
);
const Template3: Story<StatusBarProps> = args => (
  <StatusBar data={dataset} step={3} />
);

/* Story exports */
export const StatusBarStep1 = Template1.bind({});
StatusBarStep1.args = {};

export const StatusBarStep2 = Template2.bind({});
StatusBarStep2.args = {};

export const StatusBarStep3 = Template3.bind({});
StatusBarStep3.args = {};
