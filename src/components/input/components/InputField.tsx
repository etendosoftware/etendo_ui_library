import React, { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  Dimensions,
  GestureResponderEvent,
  Text,
} from 'react-native';
import { styles } from '../Input.style';
import { InputFieldProps, KeyboardTypes } from '../Input.types';
import { ShowPasswordIcon } from '../../../assets/images/icons/ShowPasswordIcon';
import { HidePasswordIcon } from '../../../assets/images/icons/HidePasswordIcon';
import InputOptions from './InputOptions';
import { NEUTRAL_0, NEUTRAL_400, NEUTRAL_600 } from '../../../styles/colors';
import { disableOutline } from '../../../helpers/table_utils';

const InputField = ({
  type,
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  placeholderPickerSearch,
  maxLength,
  keyboardType,
  dataPicker,
  displayKey,
  showSearchInPicker,
  backgroundColor = NEUTRAL_0,
  showOptionsAmount,
  height = 40,
  onPress,
  onSubmit,
  onChangeText,
  onOptionSelected,
  onFocus,
  onBlur,
}: InputFieldProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [dataOptionsFilter, setDataOptionsFilter] = useState<any>([]);
  const [filterValue, setFilterValue] = useState<string>('');
  const [optionsTop, setOptionsTop] = useState<boolean>(false);
  const [positionModal, setpositionModal] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const windowHeight = Dimensions.get('window').height;
  const refComponente = useRef<TouchableOpacity>(null);
  const regex = /^[0-9.,]+$/g;

  const getStyleText = (): TextStyle | TextStyle[] => {
    let style: Array<TextStyle | TextStyle[]> = [];
    if (value) {
      style.push(styleField.textDefault);
    } else {
      style.push(styleField.textPlaceholder);
    }

    return style as TextStyle;
  };

  useEffect(() => {
    if (dataPicker) {
      setDataOptionsFilter(dataPicker);
    }
  }, [dataPicker]);

  useEffect(() => {
    if (showOptions) {
      getTopLeft();
    }
  });

  const getTopLeft = () => {
    if (refComponente.current) {
      refComponente.current.measure((x, y, width, height, pageX, pageY) => {
        const calcDropdownTopLeft =
          pageY + height + styles.spaceInOptionsAndInput.height;

        const showFilterHeight = showSearchInPicker
          ? styles.optionFilterContainer.height
          : 0;
        const optionsHeight =
          (styles.optionContainer.height + styles.optionContainer.marginTop) *
            showFilterHeight +
          styles.optionContainer.marginTop +
          styles.optionsContainer.borderWidth * 2;

        let topPosition, bottomPosition;

        if (
          optionsHeight + calcDropdownTopLeft + styles.offSet.height >
          windowHeight
        ) {
          topPosition = pageY - optionsHeight;
          setOptionsTop(true);
        } else {
          topPosition = calcDropdownTopLeft;
          setOptionsTop(false);
        }

        bottomPosition = windowHeight - (topPosition + optionsHeight);

        setpositionModal({
          top: topPosition,
          bottom: bottomPosition,
          left: pageX,
          width,
          height,
        });
      });
    }
  };

  const handleOnChangeFilterText = (filterText: string) => {
    setFilterValue(filterText);
    if (displayKey)
      setDataOptionsFilter(
        dataPicker.filter((item: any) =>
          item[displayKey]
            .toLocaleLowerCase()
            .includes(filterText.toLocaleLowerCase()),
        ),
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
        if (text.match(regex) || text?.length === 0) {
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
      style.push({ borderColor: 'transparent' });
    }
    return style;
  };

  const removePaddingField = (): ViewStyle => {
    let style: ViewStyle = {};
    if (configField?.image) {
      style = { paddingRight: 0 };
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
    const fillValue = disabled ? NEUTRAL_400 : undefined;

    if (type === 'textInputPassword') {
      const PasswordComponent = showPassword
        ? HidePasswordIcon
        : ShowPasswordIcon;

      return (
        <PasswordComponent style={styles.inputImageSize} fill={fillValue} />
      );
    }
    return React.cloneElement(image, { fill: fillValue });
  };

  const handlePressImage = () => {
    if (type === 'textInputPassword') {
      setShowPassword(prevState => !prevState);
    } else {
      onSubmit?.();
    }
  };

  const handleOnPress = (event?: GestureResponderEvent) => {
    if (type === 'picker') {
      getTopLeft();
      setShowOptions(true);
    }

    if (onPress) {
      onPress(event);
    }
  };

  const getText = (): string | undefined => {
    if (value) {
      return value;
    }
    return placeholder;
  };

  return (
    <View style={[styleField.focus, getFocusStyle()]}>
      <TouchableOpacity
        ref={refComponente}
        style={[
          styleField.field,
          removePaddingField(),
          { backgroundColor },
          { height },
        ]}
        disabled={disabled || configField.disabledField}
        onPress={handleOnPress}
      >
        {configField?.type === 'textInput' &&
          (value ? (
            <TextInput
              editable={!disabled || !configField.disabledField}
              focusable={!disabled || !configField.disabledField}
              onBlur={onPressBlur}
              onFocus={onPressFocus}
              value={value}
              keyboardType={getKeyboardType(keyboardType)}
              onChangeText={getOnChangeText}
              style={[getStyleText(), disableOutline(), styleField.textDefault]}
              placeholder={placeholder}
              placeholderTextColor={NEUTRAL_600}
              maxLength={maxLength}
              secureTextEntry={type === 'textInputPassword' && showPassword}
            />
          ) : (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                getStyleText(),
                disableOutline(),
                styleField.textPlaceholder,
              ]}
            >
              {placeholder}
            </Text>
          ))}
        {configField?.type === 'text' && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[getStyleText(), disableOutline(), styleField.textDefault]}
          >
            {getText()}
          </Text>
        )}
        {configField?.image && (
          <TouchableOpacity
            onPress={handlePressImage}
            style={styles.buttonContainerInputField}
            disabled={disabled || configField.disabledSubmit}
          >
            {getImage(configField.image)}
          </TouchableOpacity>
        )}
        <InputOptions
          optionsTop={optionsTop}
          showOptionsAmount={showOptionsAmount}
          onOptionSelected={onOptionSelected}
          showOptions={showOptions}
          positionModal={positionModal}
          data={dataOptionsFilter}
          onClose={handleOnClose}
          onChangeFilterText={handleOnChangeFilterText}
          filterValue={filterValue}
          displayKey={displayKey}
          showSearchInPicker={showSearchInPicker}
          placeholderPickerSearch={placeholderPickerSearch}
          dataPicker={dataPicker}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
