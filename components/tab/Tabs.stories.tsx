import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {TabProps} from './Tab.types';
import {View} from 'react-native';
import SecondaryTab from './SecondaryTab';

const meta: Meta = {
  title: 'Etendo/Tab',
  component: Tab,
  argTypes: {},
};
export default meta;

/* Information to pass */
const dataset = [
  {name: 'User', route: '', key: 'user'},
  {name: 'Vehicles', route: '', key: 'vehicles'},
  {name: 'Skills', route: '', key: 'skills'},
  {name: 'Mobile app', route: '', key: 'movilApp'},
  {name: 'Staff', route: '', key: 'staff'},
  {name: 'Routing options', route: '', key: 'routing options'},
  {name: 'Map', route: '', key: 'map'},
];

const datasetTabSecundary = [
  {name: 'Home', route: '/home', key: 'user'},
  {name: 'About', route: '/about', key: 'vehicles'},
  {name: 'Staff', route: '/staff', key: 'staff'},
  {name: 'Login', route: '/login', key: 'skills'},
  {name: 'Logout', route: '/logout', key: 'movilApp'},
];

/* This function allows you to select by default the first tab */
const onCheckSelectedMock = () => dataset[0];

/* Templates */
const Template0: Story<TabProps> = args => <Tab {...args} />;
const Template1: Story<any> = args => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{padding: 20}}>
      <SecondaryTab
        tabInformation={datasetTabSecundary}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        height={40}
      />
    </View>
  );
};

/* Story exports */
export const TabsDefault = Template0.bind({});
export const SecondaryTabDefault = Template1.bind({});

TabsDefault.args = {
  data: dataset,
  onChangeSelected: onCheckSelectedMock,
  style: 'primary',
  typeSizeText: 'small',
};
