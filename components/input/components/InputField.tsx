import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {getImageStyle} from '../../../helpers/image_utils'
import {styles} from '../Input.style';
import {InputFieldProps} from '../Input.types';

const InputField = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  numberOfLines,
  centerText,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
}: InputFieldProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const heightLines = 12;
  const numberLines = numberOfLines && numberOfLines >= 1 ? numberOfLines : 1;

  /*height calculated with actual font size (+10 would be the smallest size)*/
  const heightFinal = heightLines * numberLines + 10;

  const getStyleText = (text: string | undefined) => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault);
    } else {
      style.push(styleField.textPlaceholder);
    }
    if (centerText) {
      style.push({textAlign: 'center', paddingLeft: 0});
    }
    if (numberLines > 0) {
      style.push({textAlignVertical: 'top', paddingTop: 5});
    }
   
    style.push({height: heightFinal});
    return style;
  };

  useEffect(() => {
    configField?.image ? setShowImg(true) : setShowImg(false);
  }, [configField?.image]);

  return (
    <TouchableOpacity
      style={[styleField.field, {height: heightFinal}]}
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
              style={getStyleText(value)}
              onChangeText={onChangeText}
              multiline={true}
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
              style={getStyleText(value)}>
              {value ? value : placeholder}
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
                  style={getImageStyle(configField.image, disabled)}
                />
              )}
            </TouchableOpacity>
          );
        }
      })()}
    </TouchableOpacity>
  );
};

export default InputField;
