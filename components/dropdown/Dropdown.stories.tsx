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

/* Story exports */
export const DropdownComponent = Template.bind({});
DropdownComponent.args = {};
