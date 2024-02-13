import {
  ColorValue,
  Platform,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode, useEffect, useState } from 'react';
import { ButtonContainer } from '../containers';
import { Button } from '../button';
import { CornerDownRightIcon } from '../../assets/images/icons/CornerDownRightIcon';
import { styles } from './InputBase.styles';
import { IInputBase } from './InputBase.types';
import { DANGER_700, NEUTRAL_800 } from '../../styles/colors';

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
  isLoading,
  onBlur,
}: IInputBase) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [buttons, setButtons] = useState<ReactNode[]>([]);

  const onFocusChange = () => {
    setIsFocused(true);
  };

  const onBlurChange = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const borderWidth: number = isFocused ? 1.5 : 1;
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

  const textInputStyle = [styles.textInput, textColorStyle()];

  if (Platform.OS === 'web') {
    textInputStyle.push({ outlineWidth: 0 } as any);
  }

  useEffect(() => {
    setButtons([
      ...(rightButtons ?? []),
      onSubmit !== undefined && (
        <Button
          paddingHorizontal={6}
          typeStyle="white"
          onPress={onSubmit}
          iconLeft={<CornerDownRightIcon style={styles.iconSize} />}
          disabled={isLoading}
        />
      ),
    ]);
  }, [onSubmit, isLoading, rightButtons]);

  return (
    <>
      {!!title && (
        <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.title, { color: !isError ? NEUTRAL_800 : DANGER_700 }]}>
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
          style={textInputStyle}
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
