import React from 'react';
import {Story, Meta} from '@storybook/react';
import {View} from 'react-native';

import addMarginContainer from '../../../helpers/addMargin';
import CardDropdown from './CardDropdown';

const meta: Meta = {
  title: 'Etendo/CardDropdown',
  component: CardDropdown,
  argTypes: {},
};


const Template0: Story<any> = args => (
    <View style={[addMarginContainer()]}>
    <CardDropdown />
  </View>
);

export default meta;
export const CardDropdownDefault = Template0.bind({});


CardDropdownDefault.args = {

};
