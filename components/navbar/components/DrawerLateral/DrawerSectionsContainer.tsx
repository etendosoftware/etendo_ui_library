import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DrawerDataSectionType, DrawerSectionsContainerType } from '../../Navbar.types';
import {styles} from './DrawerLateral.styles';
import DrawerLateralSubMenu from './DrawerLateralSubMenu';

const DrawerSectionsContainer = ({
  data,
  onOptionSelected,
}: DrawerSectionsContainerType) => {
  return (
    <>
      <View style={styles.modalSection}>
        <Text style={styles.modalSectionTitle}>{data?.titleSection}</Text>
        <View style={styles.modalSectionContentContainer}>
          {data?.dataSection?.map((item: DrawerDataSectionType, index: number) => {
          if (item?.subMenu) {
              return <DrawerLateralSubMenu key={'DrawerLateralSubMenu' + index} data={item} onSelectOption={(route)=>{onOptionSelected(route)}} />;
            } else {
              return (
                <TouchableOpacity  key={'DrawerDataSection' + index} style={styles.modalSectionItemContainer} onPress={()=> onOptionSelected(item?.route)}>
                  <Image
                    style={styles.modalSectionItemImage}
                    source={{uri: item?.image}}
                  />
                  <Text style={styles.modalSectionItemText}>{item?.label}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      </View>
    </>
  );
};

export default DrawerSectionsContainer;
