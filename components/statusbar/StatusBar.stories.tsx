import React from 'react';
import {Story, Meta} from '@storybook/react';

import {StatusBar} from './StatusBar';
import {Info, StatusBarProps} from './StatusBar.types';
import {Image, Text, View} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';

export default {
  title: 'Etendo/StatusBar',
  component: StatusBar,
  argTypes: {},
} as Meta<typeof StatusBar>;

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

/* Templates */
const Template: Story<StatusBarProps> = args => (
  <StatusBar data={dataset} step={args.step} />
);

/* Story exports */
export const StatusBarStep1 = Template.bind({});
StatusBarStep1.args = {};
