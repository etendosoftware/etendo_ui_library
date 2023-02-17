import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {View} from 'react-native';

const meta: Meta = {
  title: 'Etendo/Tab',
  component: Tab,
  argTypes: {},
};
export default meta;

/* Information to pass */
const datasetTab = [
  {name: 'Home', route: '/home', key: 'user'},
  {name: 'About', route: '/about', key: 'vehicles'},
  {name: 'Staff', route: '/staff', key: 'staff'},
  {name: 'Login', route: '/login', key: 'skills'},
  {name: 'Logout', route: '/logout', key: 'movilApp'},
];

/* Templates */

const Template0: Story<any> = args => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{padding: 20}}>
      <Tab
        tabInformation={datasetTab}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        height={40}
      />
    </View>
  );
};

/* Story exports */
export const TabDefault = Template0.bind({});
