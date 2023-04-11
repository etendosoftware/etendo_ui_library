import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import {styles} from '../Input.style';
import {InputFieldProps, KeyboardTypes} from '../Input.types';

import {BLACK} from '../../../styles/colors';
import InputOptions from './InputOptions';
import { ShowPassword } from '../../../assets/images/icons/ShowPassword';
import { HidePassword } from '../../../assets/images/icons/HidePassword';

const InputField = ({
  type,
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  maxLength,
  keyboardType,
  dataPicker,
  displayKey,
  onPress,
  onSubmit,
  onChangeText,
  onOptionSelected,
  onFocus,
  onBlur,
  fontSize,
  height,
  password,
}: InputFieldProps) => {
  const [showImg, setShowImg] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(password);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [dataOptionsFilter, setDataOptionsFilter] = useState<any>([]);
  const [filterValue, setFilterValue] = useState<string>('');
  const [positionModal, setpositionModal] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const windowHeight = Dimensions.get('window').height;
  const refComponente = useRef<TouchableOpacity>(null);
  const regex = /^[0-9.,]+$/g;

  const getStyleText = (text: string | undefined, password?: boolean) => {
    let style: Array<TextStyle | TextStyle[]> = [];

    if (text) {
      style.push(styleField.textDefault, {
        fontSize: fontSize,
        height: height,
        color: BLACK,
      });
    } else {
      style.push(styleField.textPlaceholder, {
        fontSize: fontSize,
        height: height,
        color: BLACK,
      });
    }

    style.push({paddingRight: password ? 50 : 10});

    return style;
  };

  const getTopLeft = () => {
    if (refComponente.current) {
      refComponente.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          let dropdownHeight = pageY + height + 188;
          if (dropdownHeight > windowHeight) {
            setpositionModal({
              top: pageY - height - 188,
              left: pageX,
              width,
              height,
            });
          } else {
            setpositionModal({top: pageY + height, left: pageX, width, height});
          }
        },
      );
    }
  };

  const handleOnChangeFilterText = (filterText: string) => {
    setFilterValue(filterText);
    setDataOptionsFilter(
      dataPicker.filter((item: any) => item.label.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())),
    );
  };

  const handleOnClose = () => {
    setShowOptions(false);
    setDataOptionsFilter(dataPicker);
    setFilterValue('');
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

  useEffect(() => {
    configField?.image ? setShowImg(true) : setShowImg(false);
  }, [configField?.image]);

  useEffect(() => {
    if (!password) {
      setShowPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (dataPicker) setDataOptionsFilter(dataPicker);
  }, [dataPicker]);

  useEffect(() => {
    if (filterValue) setFilterValue('');
  }, [showOptions]);

  const handleOnPress = (event?: GestureResponderEvent) => {
    if (type === 'picker') {
      getTopLeft();
      setShowOptions(true);
    }

    if (onPress) {
      onPress(event);
    }
  };
  return (
    <>
      <TouchableOpacity
        ref={refComponente}
        style={styleField.field}
        onPress={handleOnPress}
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
                  {showPassword ? (
                    <ShowPassword style={{width: 22, height: 22}} />
                  ) : (
                    <HidePassword style={{width: 22, height: 22}} />
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
                {configField?.image && configField?.image}
              </TouchableOpacity>
            </View>
            );
          }
        })()}
        <InputOptions
          onOptionSelected={onOptionSelected}
          showOptions={showOptions}
          positionModal={positionModal}
          data={dataOptionsFilter}
          onClose={handleOnClose}
          onChangeFilterText={handleOnChangeFilterText}
          filterValue={filterValue}
          displayKey={displayKey}
        />
      </TouchableOpacity>
    </>
  );
};

export default InputField;
