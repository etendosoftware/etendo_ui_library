import React, {useEffect, useState} from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK, BLUE, BORDER_GREY, GREY} from '../../../styles/colors';
import {
  enabledText,
  disabledText,
  disabledField,
  enabledField,
  onlyReadText,
} from '../Input.styles';
import {InputFieldConfigType, InputFieldType} from '../Input.types';

interface Props {
  config?: InputFieldConfigType;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onPressButton?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
}

const InputField: React.FC<Props> = ({
  config,
  value,
  disabled,
  placeholder,
  onPress,
  onPressButton,
  onChangeText,
}) => {
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    config?.image ? setShowImg(true) : setShowImg(false);
  }, [config?.image]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        config?.type === 'onlyRead'
          ? disabledField
          : disabled
          ? disabledField
          : enabledField
      }
      disabled={config?.disabledField}>
      {(() => {
        if (config?.type === 'textInput') {
          return (
            <TextInput
              value={value}
              style={[styles.text, styles.textArea]}
              onChangeText={onChangeText}
              placeholder={placeholder}
              placeholderTextColor={disabledText.color}
              
            />
          );
        }
        if (config?.type === 'text') {
          return (
            <Text
              style={
                disabled
                  ? disabledText
                  : [
                      enabledText,
                      {color: value ? enabledText.color : disabledText.color},
                    ]
              }>
              {value ? value : placeholder}
            </Text>
          );
        }
        if (config?.type === 'onlyRead') {
          return (
            <Text style={onlyReadText}>{value ? value : placeholder}</Text>
          );
        }
      })()}
      {(() => {
        if (showImg) {
          return (
            <TouchableOpacity
              onPress={onPressButton}
              style={styles.buttonContainer}
              disabled={config?.disabledSubmit || disabled}>
              {config?.image?.imgRoute &&
                <Image
                  source={config?.image?.imgRoute}
                  style={{
                    opacity: config?.disabledSubmit || disabled ? 0.6 : 1,
                    width: config?.image?.imgWidth,
                    height: config?.image?.imgHeight,
                    backgroundColor: config?.backgroundColor,
                  }}
                />
              }
            </TouchableOpacity>
          );
        }
      })()}
    </TouchableOpacity>
  );
};

export default InputField;

const styles = StyleSheet.create({
  text: {
    color: BLACK,
    fontSize: 11,
    paddingHorizontal: 15,
    flex: 1,
    textAlignVertical: 'center',
  },
  textArea: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    flex: 1,
  },
  placeHolder: {
    color: BORDER_GREY,
    fontSize: 11,
    paddingHorizontal: 15,
    flex: 1,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    width: 30,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
