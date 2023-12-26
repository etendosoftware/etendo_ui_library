import React from 'react';
import { ButtonContainer as ButtonContainerLibrary } from '../../components/containers/buttonContainer';
import Button from '../../components/button/Button';
import { Meta } from '@storybook/react';
import { NEUTRAL_50 } from '../styles/colors';
import { View } from 'react-native';
import * as Icons from '../utils/Icons';
import { styles } from './ButtonContainer.styles';

export const argTypes = {
  buttons: {
    description:
      'An array of buttons, provided as components, to be automatically displayed.',
    table: {
      defaultValue: { summary: [<></>, <></>, <></>] },
      type: { summary: '<Button/>' },
    },
  },
  style: {
    description:
      'It is an object that accepts CSS styles applicable in Reacts Native.',
    table: {
      defaultValue: { summary: '{}' },
      type: { summary: 'StyleProp<ViewStyle>  undefined' },
    },
  },
};

export default {
  title: 'Main/ButtonContainer',
  component: ButtonContainerLibrary,
} as Meta<typeof ButtonContainerLibrary>;

export const ButtonContainer = args => {
  return (
    <View style={styles.windowWeb}>
      <ButtonContainerLibrary {...args} />
    </View>
  );
};

ButtonContainer.args = {
  buttons: [
    <Button
      typeStyle={'primary'}
      text="Sales Order"
      iconRight={<Icons.CheckIcon />}
    />,
    <Button typeStyle={'secondary'} text="Add Payment" width={180} />,
    <Button
      typeStyle={'whiteBorder'}
      iconRight={<Icons.CancelIcon />}
      text="Cancel"
      width={120}
    />,
    <Button typeStyle={'terciary'} iconLeft={<Icons.CameraIcon />} />,
    <Button typeStyle={'white'} text="Copy lines" />,
  ],
  style: {
    backgroundColor: NEUTRAL_50,
  },
};
