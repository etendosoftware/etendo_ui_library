import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';
import {NavbarProps} from './Navbar.types';
import { View } from 'react-native';
import { NavbarV } from './typeOfNavbars/NavbarV';

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
    routeImage: require('../../assets/images/icons/hamburger.png'),
    routeNav: '',
    key: 'dataset1',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/binoculars.png'),
    routeNav: '',
    key: 'dataset2',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/video.png'),
    routeNav: '',
    key: 'dataset3',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/chat.png'),
    routeNav: '',
    key: 'dataset4',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/userNoBorder.png'),
    routeNav: '',
    key: 'dataset5',
    name: 'FirstName LastName',
  },
];

const datasetNavbarV = [
  {
    routeImage: require('../../assets/images/icons/way.png'),
    routeNav: '',
    key: 'dataset0',
    name: 'Routes',
  },
  {
    routeImage: require('../../assets/images/icons/tracing.png'),
    routeNav: '',
    key: 'dataset1',
    name: 'Tracing',
  },
  {
    routeImage: require('../../assets/images/icons/reports.png'),
    routeNav: '',
    key: 'dataset2',
    name: 'Reports',
  },
];

/* This function allows you to select by default the first navbar item */
const onCheckSelectedMock = () => datasetNavbarH[0];

/* Templates */
const Template1: Story<any> = args => (
  <View style={{width: 100}}>
    <NavbarV
        data={datasetNavbarV}
        onChangeSelected={onCheckSelectedMock}
        typeOfNavbar="vertical"
        pathname={'./login'}
      />
  </View>
);

/* Stories exports */
export const NavbarVerticalDefault = Template1.bind({});
NavbarVerticalDefault.args = {
  data:datasetNavbarV,
  onChangeSelected:()=>{},
  typeOfNavbar:"vertical",
  pathname:"./login"
};
