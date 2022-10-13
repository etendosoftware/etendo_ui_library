import React from 'react';
import {Story, Meta} from '@storybook/react';

import Dropdown from './Dropdown';
import {NavbarProps} from '../navbar/Navbar.types';

export default {
  title: 'Etendo/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const dataset = [
  {name: 'User', route: '', key: 'user'},
  {name: 'Vehicles', route: '', key: 'vehicles'},
  {name: 'Skills', route: '', key: 'skills'},
  {name: 'Mobile app', route: '', key: 'movilApp'},
  {name: 'Staff', route: '', key: 'staff'},
  {name: 'Routing options', route: '', key: 'routing options'},
  {name: 'Map', route: '', key: 'map'},
];

const onCheckSelectedMock = () => dataset[0];

/* Templates */
const Template: Story<NavbarProps> = () => (
  <Dropdown
    data={dataset}
    onChangeSelected={onCheckSelectedMock}
    text="Massive load"
    style="primary"
    typeSizeText="small"
  />
);

const Template2: Story<NavbarProps> = () => (
  <Dropdown
    data={dataset}
    onChangeSelected={onCheckSelectedMock}
    text="New vehicle"
    style="primary"
    typeSizeText="medium"
  />
);

const Template3: Story<NavbarProps> = () => (
  <Dropdown
    data={dataset}
    onChangeSelected={onCheckSelectedMock}
    text="Assets"
    style="primary"
    typeSizeText="large"
  />
);

/* Story exports */
export const DropdownSmallText = Template.bind({});
DropdownSmallText.args = {};

export const DropdownMediumText = Template2.bind({});
DropdownMediumText.args = {};

export const DropdownLargeText = Template3.bind({});
DropdownLargeText.args = {};
