import React from 'react';
import { View } from 'react-native';
import { inputStyleVariants, inputVariants, styles } from './Input.style';
import { InputProps } from './Input.types';
import { InputTitle, InputField, InputHelperText } from './index';

const Input = ({
  value,
  titleLabel,
  titleImage,
  helperText,
  placeholder,
  placeholderSearch,
  disabled,
  maxLength,
  centerText,
  keyboardType,
  displayKey,
  dataPicker,
  backgroundColor,
  showOptionsAmount,
  showSearchInPicker,
  height,
  onPress,
  onSubmit,
  onFocus = () => {},
  onBlur = () => {},
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

  const showFilterSearch = showSearchInPicker ?? dataPicker?.length > 16;

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
        placeholderSearch={placeholderSearch}
        value={value}
        onPress={onPress}
        onSubmit={onSubmit}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        onOptionSelected={onOptionSelected}
        showOptionsAmount={showOptionsAmount}
        showSearchInPicker={showFilterSearch}
        keyboardType={keyboardType}
        maxLength={maxLength}
        centerText={centerText}
        dataPicker={dataPicker}
        displayKey={displayKey}
        backgroundColor={backgroundColor}
        height={height}
      />
      <InputHelperText
        label={helperText}
        styleHelper={stateStyle().helperStyle}
      />
    </View>
  );
};

export default Input;
