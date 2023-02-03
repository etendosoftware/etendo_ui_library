import React from 'react';
import {Story, Meta} from '@storybook/react';

import {StatusBar} from './StatusBar';
import {Info, StatusBarProps} from './StatusBar.types';
import {Image, Text, View} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';

const meta: Meta = {
  title: 'Etendo/StatusBar',
  component: StatusBar,
};

/* Templates */
const Template0: Story<StatusBarProps> = args => (
  <View style={{height:50}}>
  <StatusBar {...args} />
  </View>
);

const Component = () => {
  return (
    <View style={{height:100}}>
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
    </View>
  );
};

export default meta;

/* Story exports */
export const StatusBarDefault = Template0.bind({});

StatusBarDefault.args = {
  data:[
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
  ],
  step: 0
}


