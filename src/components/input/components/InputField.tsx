import React, {
  ReactComponentElement,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  TextInput,
  TextStyle,
  TouchableOpacity,
  KeyboardType,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewStyle,
  Platform,
  Dimensions,
  GestureResponderEvent,
  Text,
} from 'react-native';
import { styles } from '../Input.style';
import { InputFieldProps, KeyboardTypes } from '../Input.types';
import { ShowPassword } from '../../../assets/images/icons/ShowPassword';
import { HidePassword } from '../../../assets/images/icons/HidePassword';
import InputOptions from './InputOptions';
import { NEUTRAL_0, NEUTRAL_400, NEUTRAL_600 } from '../../../styles/colors';

const InputField = ({
  type,
  configField,
  styleField,
  value,
  disabled,
  placeholder,
  placeholderSearch,
  maxLength,
  keyboardType,
  dataPicker,
  displayKey,
  showSearchInPicker,
  backgroundColor = NEUTRAL_0,
  showOptionsAmount = 4,
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
  const [positionModal, setpositionModal] = useState<any>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const windowHeight = Dimensions.get('window').height;
  const refComponente = useRef<TouchableOpacity>(null);
  const regex = /^[0-9.,]+$/g;
  const isWeb = Platform.OS === 'web';

  const disableOutline = (): ViewStyle | undefined => {
    if (isWeb) {
      return { outline: 'none' } as ViewStyle;
    }
  };
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
      refComponente.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          const calcDropdownTopLeft =
            pageY + height + styles.spaceInOptionsAndInput.height;

          const showFilterHeight = showSearchInPicker
            ? styles.optionFilterContainer.height
            : 0;

          const countOptions =
            showOptionsAmount > dataPicker?.length
              ? dataPicker?.length
              : showOptionsAmount;

          const optionsHeight =
            (styles.optionContainer.height + styles.optionContainer.marginTop) *
              countOptions +
            showFilterHeight +
            styles.optionContainer.marginTop +
            styles.optionsContainer.borderWidth * 2;

          let topPosition;
          if (
            optionsHeight + calcDropdownTopLeft + styles.offSet.height >
            windowHeight
          ) {
            topPosition =
              pageY - styles.spaceInOptionsAndInput.height - optionsHeight;
          } else {
            topPosition = calcDropdownTopLeft;
          }

          setpositionModal({
            top: topPosition,
            left: pageX,
            width,
            height,
          });
        },
      );
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
      const PasswordComponent = showPassword ? HidePassword : ShowPassword;

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
        onPress={handleOnPress}>
        {configField?.type === 'textInput' && (
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
        )}
        {configField?.type === 'text' && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[getStyleText(), disableOutline(), styleField.textDefault]}>
            {getText()}
          </Text>
        )}
        {configField?.image && (
          <TouchableOpacity
            onPress={handlePressImage}
            style={styles.buttonContainerInputField}
            disabled={disabled || configField.disabledSubmit}>
            {getImage(configField.image)}
          </TouchableOpacity>
        )}
        <InputOptions
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
          placeholderSearch={placeholderSearch}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
