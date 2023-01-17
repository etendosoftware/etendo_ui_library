import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';

import DropdownItem from './DropdownItem';
import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownProps, Info} from './Dropdown.types';
import {arrowPicker, arrowPickerTop} from '../../assets/images';

const Dropdown = ({
  data,
  onChangeSelected,
  text,
  typeSizeText,
}: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [toggleItem, setToggleItem] = useState<any>(undefined);
  const [chooseOption, setChooseOption] = useState(text);

  const catMenu = useRef(null);

  const handleShowOptions = () => {
    setShowOptions(!open);
  };

  useEffect(() => {
    setChooseOption(text);
  }, [text]);

  const closeOpenMenus = e => {
    if (catMenu.current && showOptions && !catMenu.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  document.addEventListener('mousedown', closeOpenMenus);

  return (
    <View style={DropdownStyleVariant.primary.container} ref={catMenu}>
      <TouchableOpacity
        style={DropdownStyleVariant.primary.dropDownButton}
        activeOpacity={1}
        onPress={(e: any) => {
          setShowOptions(!showOptions);
        }}
      >
        <Text style={DropdownStyleVariant.primary.dropDownButtonText}>
          {chooseOption}
        </Text>
        {showOptions ? (
          window.__NEXT_DATA__ ? (
            <img
              src={'/assets/images/icons/arrow-picker-top.png'}
              style={{width: 11, height: 11, position: 'absolute', right: 15}}
            />
          ) : (
            <Image
              source={arrowPickerTop}
              style={{
                width: 11,
                height: 9,
                resizeMode: 'stretch',
                position: 'absolute',
                right: 15,
              }}
            />
          )
        ) : window.__NEXT_DATA__ ? (
          <img
            src={'/assets/images/icons/arrow-picker.png'}
            style={{width: 11, height: 11, position: 'absolute', right: 15}}
          />
        ) : (
          <Image
            source={arrowPicker}
            style={{
              width: 11,
              height: 9,
              resizeMode: 'stretch',
              position: 'absolute',
              right: 15,
            }}
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
                  onChangeSelected(item.name);
                  setChooseOption(item.name);
                  setToggleItem(index);
                  handleShowOptions();
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
