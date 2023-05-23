import React from 'react';
import Button from '../button/Button';
import {Story, Meta} from '@storybook/react';
import {ButtonProps} from './Button.types';
import {View} from 'react-native';
import {styles} from './Button.styles';
import addMarginContainer from '../../helpers/addMargin';

const meta: Meta = {
  title: 'Etendo/Button',
  component: Button,
  argTypes: {},
};
export default meta;

const DefaultTemplate: Story<ButtonProps> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
    <Button {...args} />
  </View>
);

export const ButtonDefault = DefaultTemplate.bind({});

ButtonDefault.args = {
  text: 'Button',
  typeStyle: 'secondary',
  disabled: false,
  width: 150,
};
