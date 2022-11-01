import React from 'react';
import {Story, Meta} from '@storybook/react';

import {StatusBar} from './StatusBar';
import {Info, StatusBarProps} from './StatusBar.types';
import {Component} from './Component';

export default {
  title: 'Etendo/StatusBar',
  component: StatusBar,
  argTypes: {},
} as Meta<typeof StatusBar>;

const dataset: Info[] = [
  {
    step: '1. Vehicles',
    routeNav: '/vehicles',
    key: 'vehicles',
    componentActive: <Component />,
  },
  {
    step: '2. Visits',
    routeNav: '/visits',
    key: 'visits',
    componentActive: <Component />,
  },
  {
    step: '3. Routes',
    routeNav: '/routes',
    key: 'routes',
    componentActive: <Component />,
  },
  {
    step: '4. Capacity',
    routeNav: '/capacity',
    key: 'capacity',
    componentActive: <Component />,
  },
  {
    step: '5. Settings',
    routeNav: '/settings',
    key: 'settings',
    componentActive: <Component />,
  },
];

/* Templates */
const Template: Story<StatusBarProps> = args => (
  <StatusBar data={dataset} step={4} />
);

/* Story exports */
export const StatusBarStep1 = Template.bind({});
StatusBarStep1.args = {};
