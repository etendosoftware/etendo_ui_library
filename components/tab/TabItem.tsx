/* Imports */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

/* Type declaration */
type Info = {
  name: string;
  route: string;
  key: string;
};

interface Props {
  style: any;
  item: any;
  onPress: () => void;
  index: number;
  toggleItem: number;
  styleText: 'primary' | 'secundary' | 'tertiary';
}

/* Styles - This function allows to obtain the text styles of the TabItem component */
const getStyle = (style: any, toggleItem: number, index: number) => {
  let styles;
  let colorActive;
  let colorInactive;

  /* Primary style */
  if (style === 'primary') {
    colorActive = '#FFF';
    colorInactive = '#161f56';
    styles = StyleSheet.create({
      itemText: {
        fontFamily: 'Inter-SemiBold',
        textTransform: 'uppercase',
      },
    });
    /* Secundary style */
  } else if (style === 'secundary') {
    colorActive = '#202452';
    colorInactive = '#808695';
    styles = StyleSheet.create({
      itemText: {
        fontFamily: 'Inter-SemiBold',
        textTransform: 'uppercase',
      },
    });
  }

  /* Returns the style of the chosen text based on the selected styles of the Tab component */
  if (toggleItem === index) {
    return {color: colorActive, ...styles?.itemText};
  } else {
    return {color: colorInactive, ...styles?.itemText};
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
}: Props) => {
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
