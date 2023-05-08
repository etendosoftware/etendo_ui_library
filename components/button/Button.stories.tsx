import React from 'react';
import Button from '../button/Button';
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
        width={200}
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
        width={200}
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
        width={200}
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
        width={200}
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
        width={200}
      />
    </View>
  </View>
);

export const ButtonVariants = Template1.bind({});
