import React from 'react';
import {Story, Meta} from '@storybook/react';
import Dropdown from './Dropdown';
import {DropdownProps, Info} from './Dropdown.types';
import {View} from 'react-native';
import {styles} from './Dropdown.styles';
import addMarginContainer from '../../helpers/addMargin';

const meta: Meta = {
  title: 'Etendo/Dropdown',
  component: Dropdown,
  argTypes: {},
};

const dataset = [
  {name: 'User', route: '', key: 'user'},
  {name: 'Vehicles', route: '', key: 'vehicles'},
  {name: 'Skills', route: '', key: 'skills'},
  {name: 'Mobile app', route: '', key: 'movilApp'},
  {name: 'Staff', route: '', key: 'staff'},
  {name: 'Routing options', route: '', key: 'routing options'},
  {name: 'Map', route: '', key: 'map'},
];

const Template0: Story<DropdownProps> = ({...args}) => {
  return (
    <View style={[styles.storiesDropdownContainer,addMarginContainer()]}>
      <Dropdown {...args} />
    </View>
  );
};

const Template1: Story<DropdownProps> = args => (
  <View style={[styles.storiesContainer,addMarginContainer()]}>
    <View style={styles.storiesDropdownContainer}>
      <Dropdown
        data={dataset}
        onChangeSelected={(Info: Info) => {}}
        text={'Small'}
        style={'primary'}
        typeSizeText={'small'}
      />
    </View>
    <View style={styles.storiesDropdownContainer}>
      <Dropdown
        data={dataset}
        onChangeSelected={(Info: Info) => {}}
        text={'Medium'}
        style={'primary'}
        typeSizeText={'medium'}
      />
    </View>
    <View style={styles.storiesDropdownContainer}>
      <Dropdown
        data={dataset}
        onChangeSelected={(Info: Info) => {}}
        text={'Large'}
        style={'primary'}
        typeSizeText={'large'}
      />
    </View>
  </View>
);

export default meta;
export const DropdownDefault = Template0.bind({});
export const DropdownVariants = Template1.bind({});

DropdownDefault.args = {
  data: dataset,
  onChangeSelected: (Info: Info) => {},
  text: 'Dropdown',
  style: 'primary',
  typeSizeText: 'medium',
};
