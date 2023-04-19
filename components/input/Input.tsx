import React from 'react';
import {View} from 'react-native';
import {inputStyleVariants, inputVariants, styles} from './Input.style';
import {InputProps} from './Input.types';
import {InputTitle, InputField, InputHelperText} from './index';
import { type } from 'os';

const Input = ({
  value,
  titleLabel,
  titleImage,
  helperText,
  placeholder,
  disabled,
  maxLength,
  centerText,
  keyboardType,
  displayKey,
  dataPicker,
  onPress,
  onSubmit,
  onFocus,
  onBlur,
  onChangeText,
  onOptionSelected,
  typeField,
  isError,
}: InputProps) => {
  const stateStyle = () => {
    if (typeField === 'readOnly') {
      return inputStyleVariants.readOnly;
    } else if (disabled) {
      return inputStyleVariants.disabled;
    } else if (isError) {
      return inputStyleVariants.destructive;
    } else {
      return inputStyleVariants.default;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <InputTitle
        disabled={disabled}
        titleLabel={titleLabel}
        titleImage={titleImage}
        styleTitle={stateStyle().titleStyle}
      />
      <InputField
        disabled={disabled}
        type={typeField}
        configField={inputVariants[typeField].field}
        styleField={stateStyle().fieldStyle}
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onSubmit={onSubmit}
        onFocus={onFocus ? onFocus : () => {}}
        onBlur={onBlur ? onBlur : () => {}}
        onChangeText={onChangeText}
        onOptionSelected={onOptionSelected}
        keyboardType={keyboardType}
        maxLength={maxLength}
        centerText={centerText}
        dataPicker={dataPicker}
        displayKey={displayKey}
      />
      <InputHelperText
        label={helperText}
        styleHelper={stateStyle().helperStyle}
      />
    </View>
  );
};

export default Input;
