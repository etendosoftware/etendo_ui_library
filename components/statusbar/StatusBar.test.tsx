import React from 'react';
import {Image, Text, View} from 'react-native';
import renderer from 'react-test-renderer';

import {StatusBar} from './StatusBar';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {Info} from './StatusBar.types';

// Active component declaration
const Component = () => {
  return (
    <>
      <Image
        source={require('../../assets/images/icons/calendar-secundary.png')}
        style={StatusBarStyleVariant.primary.activeComponentImage}
      />
      <View style={StatusBarStyleVariant.primary.activeStepContentRightSection}>
        <Text style={StatusBarStyleVariant.primary.textTopActiveStepContent}>
          Current Plan date
        </Text>
        <Text style={StatusBarStyleVariant.primary.textBottomActiveStepContent}>
          03 January, 2022
        </Text>
      </View>
    </>
  );
};

// Information dataset
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
