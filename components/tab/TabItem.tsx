/* Imports */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {TabItemProps, TabStyleType, TabStyleFontSize} from './Tab.types';
import {TabStyleVariant} from './Tab.styles';

/* Styles - This function allows to obtain the text styles of the TabItem component */
const getStyle = (
  style: TabStyleType,
  textStyle: TabStyleFontSize,
  toggleItem: number,
  index: number,
) => {
  let colorActive: string = '';
  let colorInactive: string = '';
  let fontSize: number = 0;

  /* Choice of active and inactive color based on the style selected by the programmer */
  switch (style) {
    case 'primary':
      colorActive = '#FFF';
      colorInactive = '#161f56';
      break;
    case 'secondary':
      colorActive = '#202452';
      colorInactive = '#808695';
    default:
      break;
  }

  /* Choice of text size based on the size chosen by the programmer */
  switch (textStyle) {
    case 'small':
      fontSize = 14;
      break;
    case 'medium':
      fontSize = 18;
      break;
    case 'large':
      fontSize = 22;
      break;
    default:
      break;
  }

  /* Returns the style of the chosen text based on the selected styles of the Tab component */
  if (toggleItem === index) {
    return [
      {color: colorActive},
      {fontSize: fontSize},
      TabStyleVariant[style].itemText,
    ];
  } else {
    return [
      {color: colorInactive},
      {fontSize: fontSize},
      TabStyleVariant[style].itemText,
    ];
  }
};

/* TabItem component */
const TabItem = ({
  style,
  styleText,
  sizeText,
  item,
  index,
  onPress,
  toggleItem,
}: TabItemProps) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        onPress();
      }}
      key={item.key}
    >
      <Text style={getStyle(styleText, sizeText, toggleItem, index)}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;
