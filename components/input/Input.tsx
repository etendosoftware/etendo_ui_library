import React from 'react';
import {View} from 'react-native';
import {inputStyleVariants, inputVariants, styles} from './Input.style';
import {InputProps} from './Input.types';
import {InputTitle, InputField, InputHelperText} from './index';

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
  onPress,
  onSubmit,
  onFocus,
  onBlur,
  onChangeText,
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
        configField={inputVariants[typeField].field}
        styleField={stateStyle().fieldStyle}
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onSubmit={onSubmit}
        onFocus={onFocus ? onFocus : () => {}}
        onBlur={onBlur ? onBlur : () => {}}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        centerText={centerText}
        type={typeField}
      />
      <InputHelperText
        label={helperText}
        styleHelper={stateStyle().helperStyle}
      />
    </View>
  );
};

export default Input;
