import React from 'react';
import Button from '../button/Button';
import {Story, Meta} from '@storybook/react';
import {ButtonProps} from './Button.types';
import {View} from 'react-native';
import {styles} from './Button.styles';
import addMarginContainer from '../../helpers/addMargin';
import {CheckIcon} from '../../assets/images/icons/CheckIcon';

const meta: Meta = {
  title: 'Etendo/Button',
  component: Button,
  argTypes: {},
};

export default meta;

const Template0: Story<ButtonProps> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
    <Button {...args} />
  </View>
);

const Template1: Story<ButtonProps> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            fill={'white'}
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'Primary'}
        typeStyle={'primary'}
        width={'full'}
      />
    </View>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'Secondary'}
        typeStyle={'secondary'}
        width={'full'}
      />
    </View>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'Terciary'}
        typeStyle={'terciary'}
        width={'full'}
      />
    </View>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'White'}
        typeStyle={'white'}
        width={'full'}
      />
    </View>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'WhiteBorder'}
        typeStyle={'whiteBorder'}
        width={'full'}
      />
    </View>
  </View>
);

export const ButtonDefault = Template0.bind({});
export const ButtonVariants = Template1.bind({});

ButtonDefault.args = {
  text: 'Button',
  typeStyle: 'primary',
  disabled: false,
  width: 150,
  height: 50,
};
