import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownItemProps} from './Dropdown.types';
import {getSizeText, getStyle} from './DropdownItem.styles';

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
