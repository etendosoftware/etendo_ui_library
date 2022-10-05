import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const onCheckSelectedMock = () => datasetNavbarH[0];

const datasetNavbarH = [
  {
    routeImage: require('../../assets/images/etendo-erp.png'),
    routeNav: '',
    key: 'dataset0',
    name: 'Juan Peréz',
  },
  {
    routeImage: require('../../assets/images/more.png'),
    routeNav: '',
    key: 'dataset1',
    name: 'Juan Peréz',
  },
  {
    routeImage: require('../../assets/images/binoculars.png'),
    routeNav: '',
    key: 'dataset2',
    name: 'Juan Peréz',
  },
  {
    routeImage: require('../../assets/images/video.png'),
    routeNav: '',
    key: 'dataset3',
    name: 'Juan Peréz',
  },
  {
    routeImage: require('../../assets/images/chat.png'),
    routeNav: '',
    key: 'dataset4',
    name: 'Juan Peréz',
  },
  {
    routeImage: require('../../assets/images/user.png'),
    routeNav: '',
    key: 'dataset5',
    name: 'Juan Peréz',
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

/* Templates */
const Template: Story<any> = args => (
  <Navbar
    data={datasetNavbarH}
    onChangeSelected={onCheckSelectedMock}
    typeOfNavbar="horizontal"
  />
);

const Template2: Story<any> = args => (
  <Navbar
    data={datasetNavbarV}
    onChangeSelected={onCheckSelectedMock}
    typeOfNavbar="vertical"
  />
);

/* Story exports */
export const NavbarHorizontal = Template.bind({});
NavbarHorizontal.args = {};

export const NavbarVertical = Template2.bind({});
NavbarVertical.args = {};
