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
  typeField,
  isError,
  onPress,
  onSubmit,
  onFocus,
  onBlur,
  onChangeText,
}) => {
  const stateStyle = () => {
    var style
    if (typeField === 'onlyRead') {
      style = inputStyleVariants.onlyRead;
    } else if (disabled) {
      style = inputStyleVariants.disabled;
    } else if (isError) {
      style = inputStyleVariants.destructive;
    } else {
      style = inputStyleVariants.default;
    }
    return style;
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
        maxLength={maxLength}
        numberOfLines={numberOfLines}
      />
      <InputHelperText
        label={helperText}
        styleHelper={stateStyle().helperStyle}
      />
    </View>
  );
};

export default Input;
