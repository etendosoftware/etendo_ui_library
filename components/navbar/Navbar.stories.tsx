import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';
import {NavbarProps} from './Navbar.types';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

/* Information to pass */
const datasetNavbarH = [
  {
    routeImage: require('../../assets/images/etendo-erp.png'),
    routeNav: '',
    key: 'dataset0',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/more.png'),
    routeNav: '',
    key: 'dataset1',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/binoculars.png'),
    routeNav: '',
    key: 'dataset2',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/video.png'),
    routeNav: '',
    key: 'dataset3',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/chat.png'),
    routeNav: '',
    key: 'dataset4',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/user.png'),
    routeNav: '',
    key: 'dataset5',
    name: 'FirstName LastName',
  },
];

const datasetNavbarV = [
  {
    routeImage: require('../../assets/images/way.png'),
    routeNav: '',
    key: 'dataset0',
    name: 'Routes',
  },
  {
    routeImage: require('../../assets/images/tracing.png'),
    routeNav: '',
    key: 'dataset1',
    name: 'Tracing',
  },
  {
    routeImage: require('../../assets/images/pie-chart.png'),
    routeNav: '',
    key: 'dataset2',
    name: 'Reports',
  },
];

/* This function allows you to select by default the first navbar */
const onCheckSelectedMock = () => datasetNavbarH[0];

/* Templates */
const Template: Story<NavbarProps> = args => (
  <Navbar
    data={datasetNavbarH}
    onChangeSelected={() => datasetNavbarH[0]}
    typeOfNavbar="horizontal"
  />
);

const Template2: Story<NavbarProps> = args => (
  <Navbar
    data={datasetNavbarV}
    onChangeSelected={onCheckSelectedMock}
    typeOfNavbar="vertical"
  />
);

/* Stories exports */
export const NavbarHorizontal = Template.bind({});
NavbarHorizontal.args = {};

export const NavbarVertical = Template2.bind({});
NavbarVertical.args = {};
