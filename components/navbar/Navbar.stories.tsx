import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';
import {NavbarProps} from './Navbar.types';
import { View } from 'react-native';
import { NavbarV } from './typeOfNavbars/NavbarV';
import { arrowPickerVerticalIcon } from '../../assets/images/icons';
export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

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


/* Templates */
const Template1: Story<any> = args => (
  <View style={{width: 100}}>
    <NavbarV
        data={datasetNavbarV}
        onChangeSelected={()=>{}}
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
