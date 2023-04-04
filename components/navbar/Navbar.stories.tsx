import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Navbar} from './Navbar';

import {View} from 'react-native';
import {NavbarV} from './typeOfNavbars/NavbarV';
import {tracingIcon} from '../../assets/images/icons/tracing.svg';
import {styles} from './Navbar.styles';
import addMarginContainer from '../../helpers/addMargin';
import {WayIcon} from '../../assets/images/icons/WayIcon';
import {TracingIcon} from '../../assets/images/icons/TracingIcon';
import {ReportsIcon} from '../../assets/images/icons/ReportsIcon';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const datasetNavbarV = [
  {
    routeImage: (
      <WayIcon fill="white" style={{width: 40, height: 40, marginTop: 40}} />
    ),
    routeNav: '',
    key: 'dataset0',
    name: 'Routes',
  },
  {
    routeImage: (
      <TracingIcon
        fill="white"
        style={{width: 40, height: 40, marginTop: 45}}
      />
    ),
    routeNav: '',
    key: 'dataset1',
    name: 'Tracing',
  },
  {
    routeImage: (
      <ReportsIcon
        fill="white"
        style={{width: 40, height: 40, marginTop: 45}}
      />
    ),
    routeNav: '',
    key: 'dataset2',
    name: 'Reports',
  },
];

/* Templates */
const Template1: Story<any> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
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
