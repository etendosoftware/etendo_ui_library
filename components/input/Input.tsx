import React from 'react';
import {View} from 'react-native';
import {inputStyleVariants, inputVariants, styles} from './Input.style';
import {InputProps} from './Input.types';
import {InputTitle, InputField, InputHelperText} from './index';

const Input: React.FC<InputProps> = ({
  value,
  titleLabel,
  titleImage,
  helperText,
  placeholder,
  disabled,
  maxLength,
  numberOfLines,
  centerText,
  keyboardType,
  onPress,
  onSubmit,
  onFocus,
  onBlur,
  onChangeText,
  typeField,
  isError,
  fontSize,
  height,
  password,
}) => {
  const stateStyle = () => {
    if (typeField === 'onlyRead') {
      return inputStyleVariants.onlyRead;
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
        title={titleLabel}
        image={titleImage}
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
        numberOfLines={numberOfLines}
        centerText={centerText}
        fontSize={fontSize}
        height={height}
        password={password}
      />
      <InputHelperText
        label={helperText}
        styleHelper={stateStyle().helperStyle}
      />
    </View>
  );
};

export default Input;
