import React from 'react';
import {Story, Meta} from '@storybook/react';

import {StatusBar} from './StatusBar';
import {StatusBarProps} from './StatusBar.types';
import {Text, View} from 'react-native';
import {StatusBarStyleVariant, styles} from './StatusBar.styles';
import addMarginContainer from '../../helpers/addMargin';
import {CalendarSecundary} from '../../assets/images/icons/CalendarSecundary';

const meta: Meta = {
  title: 'Etendo/StatusBar',
  component: StatusBar,
};

/* Templates */
const Template0: Story<StatusBarProps> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
    <StatusBar {...args} />
  </View>
);

const Component = () => {
  return (
    <View style={styles.storiesComponentContainer}>
      <CalendarSecundary
        style={{
          alignSelf: 'center',
          width: 44,
          height: 44,
        }}
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
  data: [
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
  step: 0,
};
