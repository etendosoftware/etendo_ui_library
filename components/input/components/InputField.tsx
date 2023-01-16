import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
} from 'react-native';
import {getImageStyle} from '../../../helpers/image_utils';
import {styles} from '../Input.style';
import {InputFieldProps, KeyboardTypes} from '../Input.types';
import {webPasswordImage, mobilePasswordImage} from '../../../assets/images/';

const InputField = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  keyboardType,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
  fontSize,
  password,
}: InputFieldProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const regex = /^[0-9.,]+$/g;

  const getStyleText = (text: string | undefined, password?: boolean) => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault, {fontSize: fontSize});
    } else {
      style.push(styleField.textPlaceholder, {fontSize: fontSize});
    }

    style.push({paddingRight: password ? 50 : 10});

    return style;
  };
  useEffect(() => {
    if (!password) {
      setShowPassword(false);
    }
  }, [password]);

  const getKeyboardType = (
    keyboardType: KeyboardTypes | undefined,
  ): KeyboardType | undefined => {
    if (keyboardType === 'number') {
      return 'numeric';
    }
    return 'default';
  };

  const getOnChangeText = (text: string) => {
    if (onChangeText) {
      if (keyboardType === 'number') {
        if (text.match(regex)) {
          onChangeText(text);
        }
        return;
      }
      onChangeText(text);
    }
  };

  useEffect(() => {
    configField?.image ? setShowImg(true) : setShowImg(false);
  }, [configField?.image]);

  const [showPassword, setShowPassword] = useState(password);

  return (
    <TouchableOpacity
      style={styleField.field}
      onPress={onPress}
      disabled={disabled || configField.disabledField}
    >
      {(() => {
        if (configField?.type === 'textInput') {
          return (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}
            >
              <TextInput
                editable={!disabled || !configField.disabledField}
                focusable={!disabled || !configField.disabledField}
                onBlur={onBlur}
                onFocus={onFocus}
                value={value}
                keyboardType={getKeyboardType(keyboardType)}
                onChangeText={getOnChangeText}
                style={[getStyleText(value, password)]}
                placeholder={placeholder}
                maxLength={maxLength}
                secureTextEntry={showPassword}
              />
              {password && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.passwordContainer}
                >
                  <Image
                    source={
                      !showPassword ? webPasswordImage : mobilePasswordImage
                    }
                    style={styles.passwordImage}
                  />
                </TouchableOpacity>
              )}
            </View>
          );
        }
        if (configField?.type === 'text') {
          return (
            <Text ellipsizeMode="tail" style={getStyleText(value, password)}>
              {value ? value : placeholder}
            </Text>
          );
        }
      })()}
      {(() => {
        if (showImg) {
          return (
            <View style={styles.showImgContainer}>
              <TouchableOpacity
                onPress={onSubmit}
                style={styles.buttonContainerInputField}
                disabled={configField?.disabledSubmit || disabled}
              >
                {configField?.image?.imgRoute && (
                  <Image
                    source={configField?.image?.imgRoute}
                    style={getImageStyle(configField.image, disabled)}
                  />
                )}
              </TouchableOpacity>
            </View>
          );
        }
      })()}
    </TouchableOpacity>
  );
};

export default InputField;
