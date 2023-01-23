import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
  Platform,
} from 'react-native';
import {getImageStyle} from '../../../helpers/image_utils';
import {styles} from '../Input.style';
import {InputFieldProps, KeyboardTypes} from '../Input.types';
import {
  activePasswordIcon,
  disabledPasswordIcon,
} from '../../../assets/images/icons';
import {BLACK} from '../../../styles/colors';

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
  height,
  password,
}: InputFieldProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const regex = /^[0-9.,]+$/g;
  const PLATFORM_IS_WEB = Platform.OS === 'web';

  const getStyleText = (text: string | undefined, password?: boolean) => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault, {
        fontSize: fontSize,
        height: height,
        color: BLACK,
        fontFamily: 'Inter-Medium',
      });
    } else {
      style.push(styleField.textPlaceholder, {
        fontSize: fontSize,
        height: height,
        color: BLACK,
        fontFamily: 'Inter-Medium',
      });
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
                  {PLATFORM_IS_WEB ? (
                    <img
                      src={
                        !showPassword
                          ? disabledPasswordIcon
                          : activePasswordIcon
                      }
                      style={{width: 22, height: 22}}
                    />
                  ) : (
                    <Image
                      source={
                        !showPassword
                          ? {uri: disabledPasswordIcon}
                          : {uri: activePasswordIcon}
                      }
                      style={styles.passwordImage}
                    />
                  )}
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
