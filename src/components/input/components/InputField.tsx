import React, {useEffect, useRef, useState} from 'react';
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
import {styles} from '../Input.style';
import {InputFieldProps, KeyboardTypes} from '../Input.types';
import {ShowPassword} from '../../../assets/images/icons/ShowPassword';
import {HidePassword} from '../../../assets/images/icons/HidePassword';
import InputOptions from './InputOptions';
import {NEUTRAL_0} from '../../../styles/colors';

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
  backgroundColor = NEUTRAL_0,
  showOptionsAmount = 4,
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
  const isScroll = showOptionsAmount < dataPicker?.length;

  const disableOutline = (): ViewStyle | undefined => {
    if (isWeb) {
      return {outline: 'none'} as ViewStyle;
    }
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

  const calculateDropdownHeight = (
    pageY: number,
    height: number,
    showOptionsAmount: number,
    dataPicker: any[],
  ) => {
    const baseHeight =
      pageY +
      height +
      (isScroll ? styles.optionFilterContainer.height : 0) +
      styles.offSet.height;
    const additionalHeight =
      styles.optionContainer.height *
      (showOptionsAmount > dataPicker?.length
        ? dataPicker?.length
        : showOptionsAmount);

    return baseHeight + additionalHeight;
  };

  const calculateTopPosition = (
    pageY: number,
    height: number,
    showOptionsAmount: number,
    dataPicker: any[],
  ) => {
    const baseTop =
      pageY -
      height -
      (isScroll
        ? styles.optionFilterContainer.height + styles.optionContainer.marginTop
        : 0) +
      styles.offSetUp.height;
    const additionalTop =
      styles.optionContainer.height *
      (showOptionsAmount > dataPicker?.length
        ? dataPicker?.length
        : showOptionsAmount);

    return baseTop - additionalTop;
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
          const dropdownHeight = calculateDropdownHeight(
            pageY,
            height,
            showOptionsAmount,
            dataPicker,
          );

          let topPosition;
          if (dropdownHeight > windowHeight) {
            topPosition = calculateTopPosition(
              pageY,
              height,
              showOptionsAmount,
              dataPicker,
            );
          } else {
            topPosition = pageY + height;
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
        return (
          <View style={styles.hideContainer}>
            <HidePassword style={styles.inputImageSize} />
          </View>
        );
      }
      return (
        <View style={styles.showContainer}>
          <ShowPassword style={styles.inputImageSize} />
        </View>
      );
    }
    return image;
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

  return (
    <View style={[styleField.focus, getFocusStyle()]}>
      <TouchableOpacity
        ref={refComponente}
        style={[styleField.field, removePaddingField(), {backgroundColor}]}
        disabled={disabled ?? configField.disabledField}
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
            style={[
              getStyleText(value),
              disableOutline(),
              configField.placeholderStyle,
            ]}
            placeholder={placeholder}
            maxLength={maxLength}
            secureTextEntry={type === 'textInputPassword' && showPassword}
          />
        )}
        {configField?.type === 'text' && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[getStyleText(value), disableOutline()]}>
            {value ?? placeholder}
          </Text>
        )}
        {configField?.image && (
          <TouchableOpacity
            onPress={handlePressImage}
            style={styles.buttonContainerInputField}
            disabled={configField?.disabledSubmit ?? disabled}>
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
          isScroll={isScroll}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
