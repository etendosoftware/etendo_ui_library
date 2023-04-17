import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  Platform,
} from 'react-native';
import {styles} from '../Input.style';
import {InputFieldProps, KeyboardTypes} from '../Input.types';
import {ShowPassword} from '../../../assets/images/icons/ShowPassword';
import {HidePassword} from '../../../assets/images/icons/HidePassword';

const InputField = ({
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  keyboardType,
  type,
  onPress,
  onSubmit,
  onChangeText,
  onFocus,
  onBlur,
}: InputFieldProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const regex = /^[0-9.,]+$/g;
  const isWeb = Platform.OS === 'web';

  const disableOutline = () => {
    let outline = {};
    if (isWeb) {
      return (outline = {outline: 'none'});
    }
    return outline;
  };
  const getStyleText = (text?: string): TextStyle | TextStyle[] => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault);
    } else {
      style.push(styleField.textPlaceholder);
    }

    return style as TextStyle;
  };

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
        if (text.match(regex) || text.length === 0) {
          onChangeText(text);
        }
        return;
      }
      onChangeText(text);
    }
  };

  const getFocusStyle = (): ViewStyle[] => {
    let style: ViewStyle[] = [];
    if (!isFocus) {
      style.push({borderColor: 'transparent'});
    }
    return style;
  };

  const removePaddingField = (): ViewStyle => {
    let style: ViewStyle = {};
    if (configField?.image) {
      style = {paddingRight: 0};
    }
    return style;
  };

  const onPressFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    onFocus(event);
    setIsFocus(true);
  };

  const onPressBlur = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    onBlur(event);
    setIsFocus(false);
  };

  const getImage = (image: React.ReactElement): React.ReactElement => {
    if (type === 'textInputPassword') {
      if (showPassword) {
        return <HidePassword style={styles.inputImageSize} />;
      }
      return <ShowPassword style={styles.inputImageSize} />;
    }
    return image;
  };

  const handlePressImage = () => {
    if (type === 'textInputPassword') {
      setShowPassword(prevState => !prevState);
    } else {
      onSubmit;
    }
  };
  return (
    <View style={[styleField.focus, getFocusStyle()]}>
      <TouchableOpacity
        style={[styleField.field, removePaddingField()]}
        disabled={disabled || configField.disabledField}
        onPress={onPress}
      >
        {configField?.type === 'textInput' && (
          <TextInput
            editable={!disabled || !configField.disabledField}
            focusable={!disabled || !configField.disabledField}
            onBlur={onPressBlur}
            onFocus={onPressFocus}
            value={value}
            keyboardType={getKeyboardType(keyboardType)}
            onChangeText={getOnChangeText}
            style={[getStyleText(value), disableOutline()]}
            placeholder={placeholder}
            maxLength={maxLength}
            secureTextEntry={showPassword}
          />
        )}
        {configField?.type === 'text' && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[getStyleText(value), disableOutline()]}
          >
            {value ? value : placeholder}
          </Text>
        )}
        {configField?.image && (
          <TouchableOpacity
            onPress={handlePressImage}
            style={styles.buttonContainerInputField}
            disabled={configField?.disabledSubmit || disabled}
          >
            {getImage(configField.image)}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
