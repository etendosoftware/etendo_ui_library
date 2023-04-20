import React, { useMemo } from 'react';
import { View, Modal, TouchableOpacity, Text, ScrollView } from 'react-native';
import {
  DrawerCurrentIndexType,
  DrawerDataContentType,
  DrawerLateralProps,
} from '../../Navbar.types';
import EtendoLogo from '../EtendoLogo/EtendoLogo';
import { styles } from './DrawerLateral.styles';
import DrawerSectionsContainer from './DrawerSectionsContainer';

const DrawerLateral = ({
  data,
  showDrawer,
  version,
  copyright,
  currentIndex,
  onOptionSelected,
  onCloseDrawer,
}: DrawerLateralProps) => {
  const handleOptionSelected = useMemo(
    () => (route?: string, index?: DrawerCurrentIndexType) => {
      onOptionSelected(route, index);
      onCloseDrawer();
    },
    [onOptionSelected, onCloseDrawer]
  );

  const drawerContent = useMemo(
    () =>
      data?.content?.map(
        (item: DrawerDataContentType, index: number) => {
          if (item.sectionType === 'sections') {
            return (
              <DrawerSectionsContainer
                key={'drawerSection' + index}
                data={item}
                onOptionSelected={handleOptionSelected}
                currentIndex={currentIndex}
                indexSection={index}
              />
            );
          }
          return null;
        }
      ),
    [data?.content, currentIndex, handleOptionSelected]
  );

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={showDrawer} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerUp}>
            <View style={styles.modalContent}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalSectionsContainer}
              >
                <EtendoLogo onPress={() => {}} />
                <View style={styles.modalMargin} />
                {drawerContent}
              </ScrollView>
            </View>
          </View>
          <View style={styles.modalContainerDown}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.version}>
              {'V ' + version}
            </Text>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.copyright}
            >
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