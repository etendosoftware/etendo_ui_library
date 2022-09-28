/* Imports */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {TabItemProps, TabStyleType, TabStyleVariant} from './Tab.types';

/* Styles - This function allows to obtain the text styles of the TabItem component */
const getStyle = (style: TabStyleType, toggleItem: number, index: number) => {
  let colorActive: string = '';
  let colorInactive: string = '';

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

  /* Returns the style of the chosen text based on the selected styles of the Tab component */
  if (toggleItem === index) {
    return [{color: colorActive}, TabStyleVariant[style].itemText];
  } else {
    return [{color: colorInactive}, TabStyleVariant[style].itemText];
  }
};

/* TabItem component */
const TabItem = ({
  style,
  styleText,
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
      <Text style={getStyle(styleText, toggleItem, index)}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
