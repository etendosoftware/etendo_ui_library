import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';

import DropdownItem from './DropdownItem';
import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownProps, Info} from './Dropdown.types';
import {arrowPickerVerticalIcon} from '../../assets/images/icons';

const Dropdown = ({
  data,
  onChangeSelected,
  text,
  typeSizeText,
}: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [toggleItem, setToggleItem] = useState<any>(undefined);
  const [chooseOption, setChooseOption] = useState(text);

  const PLATFORM_IS_WEB = Platform.OS === 'web';
  const catMenu = useRef(null);

  const handleShowOptions = () => {
    setShowOptions(!open);
  };

  useEffect(() => {
    setChooseOption(text);
  }, [text]);

  const closeOpenMenus = (e: any) => {
    if (catMenu.current && showOptions && !catMenu.current.contains(e.target)) {
      setShowOptions(false);
    }
  };

  const showOptionsIcon = (isWeb: boolean) => {
    return isWeb ? (
      <img
        src={arrowPickerVerticalIcon}
        style={{
          width: 10,
          height: 7,
          position: 'absolute',
          right: 15,
          rotate: '180deg',
        }}
      />
    ) : (
      <Image
        source={arrowPickerVerticalIcon}
        style={{
          width: 11,
          height: 9,
          resizeMode: 'stretch',
          position: 'absolute',
          right: 15,
          transform: [{rotate: '180deg'}],
        }}
      />
    );
  };

  const notShowOptionsIcon = (isWeb: boolean) => {
    return isWeb ? (
      <img
        src={arrowPickerVerticalIcon}
        style={{width: 10, height: 7, position: 'absolute', right: 15}}
      />
    ) : (
      <Image
        source={arrowPickerVerticalIcon}
        style={{
          width: 11,
          height: 9,
          resizeMode: 'stretch',
          position: 'absolute',
          right: 15,
        }}
      />
    );
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
        {showOptions
          ? showOptionsIcon(PLATFORM_IS_WEB)
          : notShowOptionsIcon(PLATFORM_IS_WEB)}
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
