import React from 'react';
import {Story, Meta} from '@storybook/react';

import Tab from './Tab';
import {TabProps} from './Tab.types';

export default {
  title: 'Etendo/Tabs',
  component: Tab,
  argTypes: {},
} as Meta<typeof Tab>;

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

const dataset2 = [
  {name: 'Prods. of interest', route: '', key: 'prodsOfInterest'},
  {name: 'Assigned pop', route: '', key: 'Assigned pop'},
  {name: 'Incidents', route: '', key: 'incidents'},
  {name: 'Competition', route: '', key: 'competition'},
  {name: 'Questions', route: '', key: 'questions'},
  {name: 'Observations', route: '', key: 'observations'},
];

const dataset3 = [
  {name: 'Workspace', route: '', key: 'workspace'},
  {name: 'Business Partner', route: '', key: 'businessPartner'},
  {name: 'Sales order', route: '', key: 'salesOrder'},
];

/* This function allows you to select by default the first tab */
const onCheckSelectedMock = () => dataset[0];

/* Templates */
const Template: Story<TabProps> = args => (
  <Tab
    data={dataset}
    onChangeSelected={onCheckSelectedMock}
    style="primary"
    typeSizeText="small"
  />
);

const Template2: Story<TabProps> = args => (
  <Tab
    data={dataset2}
    onChangeSelected={onCheckSelectedMock}
    style="primary"
    typeSizeText="medium"
  />
);

/* Story exports */
export const PrimaryStyleVersion1 = Template.bind({});
PrimaryStyleVersion1.args = {};

export const PrimaryStyleVersion2 = Template2.bind({});
PrimaryStyleVersion2.args = {};
