import React from 'react';
import {Text, TouchableOpacity, TextStyle} from 'react-native';
import {GREY_5, YELLOW} from '../../styles/colors';
import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownItemProps, DropdownStyleFontSize} from './Dropdown.types';

/* Styles - This function allows to obtain the text styles of the TabItem component */
const getStyle = (toggleItem: number, index: number) => {
  let colorActive: string = YELLOW;
  let colorInactive: string = GREY_5;

  if (index === toggleItem) {
    return [
      DropdownStyleVariant.primary.option,
      {backgroundColor: colorActive},
    ];
  } else {
    return [
      DropdownStyleVariant.primary.option,
      {backgroundColor: colorInactive},
    ];
  }
};

const getSizeText = (sizeText: DropdownStyleFontSize) => {
  let fontSize: number = 0;

  /* Choice of text size based on the size chosen by the programmer */
  switch (sizeText) {
    case 'small':
      fontSize = 14;
      break;
    case 'medium':
      fontSize = 18;
      break;
    case 'large':
      fontSize = 20;
      break;
    default:
      break;
  }

  return fontSize;
};

const DropdownItem = ({
  item,
  onPress,
  index,
  toggleItem,
  sizeText,
}: DropdownItemProps) => {
  return (
    <TouchableOpacity
      style={getStyle(toggleItem, index)}
      onPress={() => {
        onPress();
      }}
      key={item.key}
      activeOpacity={1}
    >
      <Text
        key={item.key}
        style={[
          {fontSize: getSizeText(sizeText)},
          DropdownStyleVariant.primary.textOption,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;
