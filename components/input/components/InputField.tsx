import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {getImageStyle} from '../../../helpers/image_utils';
import {styles} from '../Input.style';
import {InputFieldProps} from '../Input.types';

const InputField = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
  fontSize,
  password,
}: InputFieldProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);

  const getStyleText = (text: string | undefined) => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault, {fontSize: fontSize});
    } else {
      style.push(styleField.textPlaceholder, {fontSize: fontSize});
    }

    return style;
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
                style={[
                  getStyleText(value),
                  {paddingRight: password ? 50 : 10},
                ]}
                onChangeText={onChangeText}
                placeholder={placeholder}
                maxLength={maxLength}
                secureTextEntry={showPassword}
              />
              {password && (
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    right: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={
                      !showPassword
                        ? require('../../../assets/images/icons/active-password.png')
                        : require('../../../assets/images/icons/disabled-password.png')
                    }
                    style={{
                      height: 22,
                      width: 22,
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          );
        }
        if (configField?.type === 'text') {
          return (
            <Text ellipsizeMode="tail" style={getStyleText(value)}>
              {value ? value : placeholder}
            </Text>
          );
        }
      })()}
      {(() => {
        if (showImg) {
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                position: 'absolute',
                right: 10,
              }}
            >
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
