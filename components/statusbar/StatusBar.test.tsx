import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
import {StatusBar} from './StatusBar';

const Component = () => {
  return <View style={{height: 100}}></View>;
};

describe('Running Test for StatusBar', () => {
  it('Check StatusBar Disabled', () => {
    const tree = renderer
      .create(
        <StatusBar
          data={[
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
          ]}
          step={0}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
