import React from 'react';
import renderer from 'react-test-renderer';
import {Component} from './Component';

import {StatusBar} from './StatusBar';
import {Info} from './StatusBar.types';

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

describe('Running Test for StatusBar', () => {
  it('Check StatusBar', () => {
    const tree = renderer
      .create(<StatusBar data={dataset} step={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
