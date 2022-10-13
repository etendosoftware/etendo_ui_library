import React from 'react';

import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useState} from 'react';
import DropdownItem from './DropdownItem';
import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownProps, Info} from './Dropdown.types';

const Dropdown = ({
  data,
  onChangeSelected,
  text,
  typeSizeText,
}: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [toggleItem, setToggleItem] = useState<number>(-1);

  return (
    <View style={DropdownStyleVariant.primary.container}>
      <TouchableOpacity
        style={DropdownStyleVariant.primary.dropDownButton}
        activeOpacity={1}
        onPress={() => setShowOptions(!showOptions)}
      >
        <Text style={DropdownStyleVariant.primary.dropDownButtonText}>
          {text}
        </Text>
        {showOptions ? (
          <Image
            source={require('../../assets/images/icons/arrowPicker.png')}
            style={DropdownStyleVariant.primary.iconWithOptionsDisplayed}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../../assets/images/icons/arrowPicker.png')}
            style={DropdownStyleVariant.primary.iconWithOptionsNotDisplayed}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>

      {showOptions && (
        <ScrollView style={DropdownStyleVariant.primary.containerOptions}>
          {data.map((item: Info, index: number) => {
            return (
              <DropdownItem
                item={item}
                index={index}
                onPress={() => {
                  /* Allows to detect the selected item */
                  setToggleItem(index);
                  onChangeSelected({
                    name: item.name,
                    route: item.route,
                    key: item.key,
                  });
                }}
                key={item.key}
                toggleItem={toggleItem}
                sizeText={typeSizeText}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Dropdown;
