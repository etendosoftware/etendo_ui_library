import React from 'react';
import Button from './Button';
import {Story, Meta} from '@storybook/react';
import {ButtonProps} from './Button.types';
import {View} from 'react-native';
import {styles} from './Button.styles';
import addMarginContainer from '../../helpers/addMargin';
import {CheckIcon} from '../../assets/images/icons/CheckIcon';
import {NEUTRAL_0} from '../../styles/colors';

const meta: Meta = {
  title: 'Etendo/Button',
  component: Button,
  argTypes: {},
};

export default meta;

const BUTTON_WIDTH = 200;

const Template1: Story<ButtonProps> = args => (
  <View style={[styles.storiesContainer, addMarginContainer()]}>
    <View style={styles.storiesButtonContainer}>
      <Button
        onPress={() => {}}
        image={
          <CheckIcon
            fill={NEUTRAL_0}
            style={{
              marginRight: 10,
              width: 12,
              height: 10,
            }}
          />
        }
        text={'Primary'}
        typeStyle={'primary'}
        width={BUTTON_WIDTH}
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
        width={BUTTON_WIDTH}
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
        width={BUTTON_WIDTH}
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
        width={BUTTON_WIDTH}
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
        width={BUTTON_WIDTH}
      />
    </View>
  </View>
);

export const ButtonVariants = Template1.bind({});
