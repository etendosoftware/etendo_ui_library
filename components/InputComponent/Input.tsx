import React from 'react';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {WHITE} from '../../styles/colors';

import {
  InputFieldConfigType,
  InputFieldVariants,
  InputImageType,
  inputVariants,
} from './Input.types';

import InputField from './InputComponents/InputField';
import InputTitle from './InputComponents/InputTitle';

export interface Props {
  titleLabel?: string;
  titleImage?: InputImageType;
  placeholder?: string;
  disabled?: boolean;
  value: string;
  data?: Array<any>;
  onPress?: (event: GestureResponderEvent) => void;
  onPressButton?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  typeField: InputFieldVariants;
}

const Input: React.FC<Props> = ({
  value,
  titleLabel,
  titleImage,
  placeholder,
  disabled,
  onPress,
  onPressButton,
  onChangeText,
  typeField,
}) => {
  return (
    <View style={styles.inputContainer}>
      <InputTitle title={titleLabel} image={titleImage} />
      <InputField
        disabled={disabled}
        config={inputVariants[typeField].field}
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onPressButton={onPressButton}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});
