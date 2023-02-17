import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';

import {View} from 'react-native';
import {NavbarV} from './typeOfNavbars/NavbarV';
import {reportIcon, tracingIcon, wayIcon} from '../../assets/images/icons';
import { styles } from './Navbar.styles';
import addMarginContainer from '../../helpers/addMargin';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const datasetNavbarV = [
  {
    routeImage: wayIcon,
    routeNav: '',
    key: 'dataset0',
    name: 'Routes',
  },
  {
    routeImage: tracingIcon,
    routeNav: '',
    key: 'dataset1',
    name: 'Tracing',
  },
  {
    routeImage: reportIcon,
    routeNav: '',
    key: 'dataset2',
    name: 'Reports',
  },
];

/* Templates */
const Template1: Story<any> = args => (
  <View style={[styles.storiesContainer,addMarginContainer()]}>
    <NavbarV
      data={datasetNavbarV}
      onChangeSelected={() => {}}
      typeOfNavbar="vertical"
      pathname={'./login'}
    />
  </View>
);

/* Stories exports */
export const NavbarVerticalDefault = Template1.bind({});
NavbarVerticalDefault.args = {
  data: datasetNavbarV,
  onChangeSelected: () => {},
  typeOfNavbar: 'vertical',
  pathname: './login',
};
