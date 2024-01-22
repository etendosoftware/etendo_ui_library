import {
  ColorValue,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode, useEffect, useState } from 'react';
import { IInputBase } from './InputBase.types';
import { ButtonContainer } from '../containers';
import { styles } from './InputBase.style';
import { Button } from '../button';
import { CornerDownRightIcon } from '../../assets/images/icons/CornerDownRightIcon';

const InputBase = ({
  value,
  placeholder,
  title,
  helperText,
  isDisabled,
  isError,
  onChangeText,
  icon,
  rightButtons,
  onSubmit,
}: IInputBase) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [buttons, setButtons] = useState<ReactNode[]>([]);

  const onFocusChange = () => {
    setIsFocused(true);
  };

  const onBlurChange = () => {
    setIsFocused(false);
  };

  const borderWidth: number = isFocused ? 3 : 1;
  const paddingVertical: number = 13 - (borderWidth - 1);
  const paddingHorizontal: number = 12 - (borderWidth - 1);

  const borderStyle = (): ViewStyle | undefined => {
    if (!value && !isFocused) {
      return styles.containerPlaceholder;
    }
    if (isDisabled) {
      return styles.containerIsDisabled;
    }
    if (isError) {
      return styles.containerIsError;
    }
  };

  const iconColorStyle = (): ColorValue | undefined => {
    if (!value) {
      return styles.iconPlaceholder.color;
    }
    if (isDisabled) {
      return styles.iconIsDisabled.color;
    }
    if (isFocused) {
      return styles.iconIsFocus.color;
    }
    if (isError) {
      return styles.iconIsError.color;
    }
  };

  const textColorStyle = (): TextStyle | undefined => {
    if (!value) {
      return styles.textPlaceholder;
    }
    if (isDisabled) {
      return styles.textIsDisabled;
    }
    if (isFocused) {
      return styles.textIsFocus;
    }
    if (isError && !isFocused) {
      return styles.textIsError;
    }
  };

  useEffect(() => {
    setButtons([
      ...(rightButtons ?? []),
      onSubmit !== undefined && (
        <Button
          width={24}
          typeStyle="white"
          onPress={onSubmit}
          iconLeft={<CornerDownRightIcon style={styles.iconSize} />}
        />
      ),
    ]);
  }, [onSubmit, rightButtons]);

  return (
    <>
      {!!title && (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      )}
      <View
        style={[
          styles.container,
          borderStyle(),
          {
            borderWidth: borderWidth,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
          },
        ]}>
        {!!icon && (
          <TouchableOpacity
            disabled={!icon.onPress || isDisabled}
            onPress={() => {
              if (icon.onPress) {
                icon.onPress();
              }
            }}
            style={{ marginRight: 5 }}>
            {React.cloneElement(icon.icon, {
              style: icon.icon.props.style || styles.iconRight,
              fill: iconColorStyle(),
            })}
          </TouchableOpacity>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={!isDisabled}
          onFocus={onFocusChange}
          onBlur={onBlurChange}
          style={[styles.textInput, textColorStyle()]}
          onSubmitEditing={onSubmit || (() => { })}
        />
        {!!buttons && (
          <ButtonContainer style={styles.buttonContainer} buttons={buttons} />
        )}
      </View>
      {!!helperText && (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.helperText}>
          {helperText}
        </Text>
      )}
    </>
  );
};

export default InputBase;
