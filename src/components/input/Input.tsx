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
  placeholderPickerSearch,
  disabled = false,
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
    } else if (getDisabled()) {
      return inputStyleVariants.disabled;
    } else if (isError) {
      return inputStyleVariants.destructive;
    } else {
      return inputStyleVariants.default;
    }
  };

  const getDisabled = (): boolean => {
    if (typeField === 'picker') {
      return !dataPicker?.length || disabled;
    }
    if (typeField === 'readOnly') {
      return false;
    }
    return disabled;
  };

  const showFilterSearch = dataPicker && (showSearchInPicker ?? dataPicker?.length > 16);

  return (
    <View style={styles.inputContainer}>
      <InputTitle
        disabled={getDisabled()}
        titleLabel={titleLabel}
        titleImage={titleImage}
        styleTitle={stateStyle().titleStyle}
      />
      <InputField
        disabled={getDisabled()}
        type={typeField}
        configField={inputVariants[typeField].field}
        styleField={stateStyle().fieldStyle}
        placeholder={placeholder}
        placeholderPickerSearch={placeholderPickerSearch}
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
