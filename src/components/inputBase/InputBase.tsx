import {
  ColorValue,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './InputBase.styles';
import { IInputBase } from './InputBase.types';
import { DANGER_700, NEUTRAL_500, PRIMARY_100 } from '../../styles/colors';
import { cursorPointer } from '../../helpers/table_utils';
import { GridContainer } from '../containers/gridContainer';

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
  onPress,
  onBlur,
  onSubmitEditing,
  secureTextEntry,
  keyboardType = 'default',
  styleContainer,
  isFocusable = true,
  refInputContainer,
  refInput
}: IInputBase) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderWidth: number = isFocused ? 3 : 1;
  const paddingVertical: number = 13 - borderWidth;
  const paddingHorizontal: number = 12 - borderWidth;
  const isEditable = onPress ? false : !isDisabled;

  const onFocusChange = () => {
    if (!isDisabled && isFocusable) {
      setIsFocused(true);
    }
  };

  const onBlurChange = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const determineColor = (icon?: boolean) => {
    if (icon) {
      return iconColorStyle();
    }
    if (isDisabled) {
      return NEUTRAL_500;
    }
    return isError ? DANGER_700 : PRIMARY_100;
  };

  const textColorStyle = (): ColorValue => {
    if (!value || isDisabled) {
      return NEUTRAL_500;
    }

    if (isFocused) {
      return PRIMARY_100;
    }
    if (isError && !isFocused) {
      return DANGER_700;
    }
    return PRIMARY_100;
  };

  const iconColorStyle = (): ColorValue => {
    if (isDisabled) {
      return NEUTRAL_500;
    }

    if (isFocused) {
      return PRIMARY_100;
    }
    if (isError && !isFocused) {
      return DANGER_700;
    }
    return PRIMARY_100;
  };

  const textInputStyle = [styles.textInput, { color: textColorStyle() }];

  if (Platform.OS === 'web') {
    textInputStyle.push({ outlineWidth: 0 } as any);
  }

  const handleChange = (string: string) => {
    if (onChangeText) {
      if (
        ['numeric', 'number-pad', 'phone-pad', 'decimal-pad'].includes(
          keyboardType,
        )
      ) {
        const regexNumber = /^[\d.,\/]*$/;
        if (regexNumber.test(string) || string === '') {
          onChangeText(string);
        }
      } else {
        onChangeText(string);
      }
    }
  };

  const determineIconStyles = (icon: any, disable?:boolean) => {
    if (!icon) return null;
    const { style = {}, ...otherIconProps } = icon.props;
    return React.cloneElement(icon, {
      fill: disable ? NEUTRAL_500 : determineColor(true),
      style: {
        ...style,
        height: style.height || styles.icon.height,
        width: style.width || styles.icon.width,
      },
      ...otherIconProps,
    });
  };

  return (
    <>
      {!!title && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.title, { color: determineColor() }]}>
          {title}
        </Text>
      )}
      <View
        ref={refInputContainer}
        style={[
          styles.container,
          { borderColor: determineColor() },
          {
            paddingHorizontal,
            paddingVertical,
            borderWidth,
          },
          { ...styleContainer },
        ]}>
        {!!icon && (
          <View style={styles.iconContainer}>
            {React.cloneElement(icon, {
              style: styles.icon,
              fill: determineColor(true),
            })}
          </View>
        )}
        <TouchableOpacity
          disabled={isDisabled}
          style={styles.containerInput}
          onPress={onPress}>
          <TextInput
          ref={refInput}
            value={value}
            onPressIn={onPress}
            onChangeText={handleChange}
            placeholder={placeholder}
            editable={isEditable}
            onFocus={onFocusChange}
            onBlur={onBlurChange}
            onSubmitEditing={onSubmitEditing}
            style={[textInputStyle, onPress && cursorPointer()]}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
        </TouchableOpacity>
        {!!rightButtons && (
          <GridContainer
            gapHorizontal={12}
            stylesContainer={styles.gridContainer}
            components={rightButtons.map((ButtonComponent: any, index) => {
              const { iconLeft, iconRight, ...otherProps } =
                ButtonComponent.props;
              const modifiedProps = { ...otherProps };
              modifiedProps.paddingVertical =
                modifiedProps?.paddingVertical || 0;
              modifiedProps.paddingHorizontal =
                modifiedProps?.paddingHorizontal || 0;
              modifiedProps.iconLeft = determineIconStyles(iconLeft, modifiedProps.disabled || isDisabled);
              modifiedProps.iconRight = determineIconStyles(iconRight, modifiedProps.disabled || isDisabled);
              modifiedProps.text = '';

              return (
                <ButtonComponent.type
                  {...modifiedProps}
                  key={index}
                  disabled={isDisabled || modifiedProps.disabled}
                  typeStyle={'white'}
                />
              );
            })}
          />
        )}
      </View>
      {!!helperText && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.helperText, { color: determineColor() }]}>
          {helperText}
        </Text>
      )}
    </>
  );
};

export default InputBase;
