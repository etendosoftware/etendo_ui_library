import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { addImageStyle } from '../../../helpers/utilimage';

import {styles} from '../Input.style';
import {ImageType, InputFieldProps} from '../Input.types';

const InputField = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  numberOfLines,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
}:InputFieldProps) => {
  
  const [showImg, setShowImg] = useState<boolean>(false);
  const heightLines = 12;
  const numberLines = numberOfLines && numberOfLines >= 1 ?numberOfLines :  1;
  
  /*height calculated with actual font size (+10 would be the smallest size)*/
  const heightFinal = heightLines * numberLines + 14 

  const getStyleText = (text: string | undefined) => {
    var style
    
    if (text) {
      style = styleField.textDefault;
    } else {
      style = styleField.textPlaceholder;
    }
    return [style,{  height: heightFinal}];
  };

  useEffect(() => {
    configField?.image ? setShowImg(true) : setShowImg(false);
  }, [configField?.image]);

  return (
    <TouchableOpacity
      style={[styleField.field,{height: heightFinal}]}
      onPress={onPress}
      disabled={disabled || configField.disabledField}>
      {(() => {
        if (configField?.type === 'textInput') {
          return (
            <TextInput
              editable={!disabled || !configField.disabledField}
              focusable={!disabled || !configField.disabledField}
              onBlur={onBlur}
              onFocus={onFocus}
              value={value}
              style={[getStyleText(value)]}
              onChangeText={onChangeText}
              multiline={true}
              numberOfLines={numberOfLines}
              placeholder={placeholder}
              maxLength={maxLength}
            />
          );
        }
        if (configField?.type === 'text') {
          return (
            <Text
              ellipsizeMode="tail"
              numberOfLines={numberOfLines}
              style={[
                getStyleText(value),  
              ]}>
              {value ? value: placeholder}
            </Text>
          );
        }
      })()}
      {(() => {
        if (showImg) {
          return (
            <TouchableOpacity
              onPress={onSubmit}
              style={styles.buttonContainerInputField}
              disabled={configField?.disabledSubmit || disabled}>
              {configField?.image?.imgRoute && (
                <Image
                  source={configField?.image?.imgRoute}
                  style={addImageStyle(configField.image, disabled)}
                />
              )}
            </TouchableOpacity>
          );
        }
      })()}
    </TouchableOpacity>
  );
};

export default InputField