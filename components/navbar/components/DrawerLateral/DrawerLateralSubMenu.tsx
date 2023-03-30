import {Text, TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';
import {DropdownArrowGrey64} from '../../../../assets/images/icons/base64/dropdown-arrow-grey-64';
import {styles} from './DrawerLateral.styles';
import {
  DrawerDataSubMenuType,
  DrawerLatertalMenuProps,
} from '../../Navbar.types';

const DrawerLateralSubMenu = ({
  data,
  onSelectOption,
}: DrawerLatertalMenuProps) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const addMarginBottom = (isMargin:boolean) => {
    if(isMargin){
      return {marginBottom: 30}
    }
    return {}
  }

  const handleOnPress = (route?: string) => {
    onSelectOption(route);
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.modalSectionItemNoMarginContainer,
          addMarginBottom(!showSubMenu) 
        ]}
        onPress={() => {
          setShowSubMenu(!showSubMenu);
        }}
      >
        <Image
          style={styles.modalSectionItemImage}
          source={{uri: data?.image}}
        />
        <Text style={styles.modalSectionItemText}>{data?.label}</Text>
        <Image
          style={styles.modalSectionMenuDropdownImage}
          source={{uri: DropdownArrowGrey64}}
        />
      </TouchableOpacity>
      {showSubMenu && (
        <View style={styles.modalSectionSubMenuContainer}>
          {data?.subMenu?.map((item: DrawerDataSubMenuType, index) => {
            return (
              <TouchableOpacity
              key={'drawerDataSubMenu' + index}
                onPress={() => handleOnPress(item?.route)}
                style={styles.modalSectionSubItemContainer}
              >
                <Text style={styles.modalSectionItemText}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

export default DrawerLateralSubMenu;
