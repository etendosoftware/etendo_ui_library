{/* Imports */}
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

{/* Type declaration */}
type Info = {
  name: string;
  route: string;
};

interface Props {
  style: any; 
  item: any;
  onPress: () => void;
  index: number;
  toggleItem: number;
}

{/* Styles */}
const styles = StyleSheet.create({
  itemText: {
    fontFamily: 'Inter-SemiBold',
    textTransform: 'uppercase',
  }
})

{/* TabItem component */}
const TabItem = ({style, item, index, onPress, toggleItem}: Props) => {
  {/* TabItem text colors */}
  const colorActive = '#FFF';
  const colorInactive = '#161f56';

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        onPress();
      }}
      key={item.key}>
      <Text
        style={
          toggleItem === index
            ? {color: colorActive, ...styles.itemText}
            : {color: colorInactive, ...styles.itemText}
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;