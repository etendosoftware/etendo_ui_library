import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { inputStyleVariants, inputVariants } from './Input.style';

import {
  InputProps,
} from './Input.types';

import {InputTitle,InputField,InputHelperText} from '../input/index'


const Input: React.FC<InputProps> = ({
  value,
  titleLabel,
  titleImage,
  helperText,
  placeholder,
  disabled,
  maxLenght,
  numberOfLines,
  onPress,
  onSubmit,
  onFocus,
  onBlur,
  onChangeText,
  typeField,
  isError,
  
}) => {

  const stateStyle = () =>
  {
    if(typeField === 'onlyRead')
    {
      return inputStyleVariants['onlyRead']
    }
    if(disabled)
    {
      return inputStyleVariants['disabled']
    }
    if(isError)
    {
      return inputStyleVariants['destructive']
    }
    return inputStyleVariants['default']
  }

  return (
    <View style={styles.inputContainer}>
      <InputTitle disabled={disabled} title={titleLabel} image={titleImage} styleTitle={stateStyle().titleStyle} />
      <InputField
        disabled={disabled}
        configField={inputVariants[typeField].field}
        styleField={stateStyle().fieldStyle}
        placeholder={placeholder}
        value={value}
        onPress={onPress}
        onSubmit={onSubmit}
        onFocus={onFocus? onFocus:()=>{}}
        onBlur={onBlur? onBlur:()=>{}}
        onChangeText={onChangeText}  
        maxLenght={maxLenght}
        numberOfLines={numberOfLines}
      />
      <InputHelperText label={helperText} styleHelper={stateStyle().helperStyle}/>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});
