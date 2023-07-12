import React, {useEffect, useState} from 'react';
import {View, Modal, TouchableOpacity, ScrollView, Text} from 'react-native';
import {
  DrawerCurrentIndexType,
  DrawerDataContentType,
  DrawerLateralProps,
} from '../../Navbar.types';
import {styles} from './DrawerLateral.styles';
import DrawerSectionsContainer from './DrawerSectionsContainer';
import {EtendoLogo} from '../..';

const DrawerLateral = ({
  data,
  showDrawer,
  version,
  copyright,
  currentIndex,
  onOptionSelected,
  onCloseDrawer,
}: DrawerLateralProps) => {
  const [currentIndexHandler, setCurrentIndexHandler] =
    useState<any>(currentIndex);

  const handleOptionSelected = (
    route?: string,
    index?: DrawerCurrentIndexType,
  ) => {
    if (onOptionSelected) {
      setCurrentIndexHandler(index);
      setTimeout(() => {
        onOptionSelected(route, index);
      }, 100);
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={showDrawer} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerUp}>
            <View style={styles.modalContent}>
              <View style={styles.image}>
                <EtendoLogo onPress={() => {}} />
              </View>
              <ScrollView style={{paddingRight: 12}}>
                {data?.map((item: DrawerDataContentType, index: number) => {
                  if (item.sectionType === 'sections') {
                    return (
                      <DrawerSectionsContainer
                        key={'drawerSection' + index}
                        data={item}
                        onOptionSelected={handleOptionSelected}
                        currentIndex={currentIndexHandler}
                        indexSection={index}
                      />
                    );
                  }
                  return null;
                })}
              </ScrollView>
            </View>
          </View>
          <View style={styles.modalContainerDown}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.version}>
              {version && 'V ' + version}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.copyright}>
              {copyright}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.overlay}
          onPress={onCloseDrawer}
        />
      </Modal>
    </View>
  );
};

export default DrawerLateral;
