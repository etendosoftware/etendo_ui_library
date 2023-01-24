import React from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {TabProps} from './Tab.types';
import { View } from 'react-native';

const meta: Meta = {
  title: 'Etendo/Tab',
  component: Tab,
  argTypes: {}
}
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

/* This function allows you to select by default the first tab */
const onCheckSelectedMock = () => dataset[0];

/* Templates */
const Template0: Story<TabProps> = (args) => <Tab {...args}/>

/* Story exports */
export const TabsDefault = Template0.bind({});

TabsDefault.args = {
  data:dataset,
  onChangeSelected:onCheckSelectedMock,
  style:"primary",
  typeSizeText:"small"
};




