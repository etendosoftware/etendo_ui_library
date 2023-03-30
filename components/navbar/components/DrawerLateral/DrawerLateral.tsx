import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {DrawerDataContentType, DrawerLateralProps} from '../../Navbar.types';
import EtendoLogo from '../EtendoLogo/EtendoLogo';
import {styles} from './DrawerLateral.styles';
import DrawerSectionsContainer from './DrawerSectionsContainer';

const DrawerLateral = ({
  data,
  showDrawer,
  version,
  copyright,
  onOptionSelected,
  onCloseDrawer,
}: DrawerLateralProps) => {
  const handleOptionSelected = (route?: string) => {
    onOptionSelected(route);
    onCloseDrawer();
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={showDrawer} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerUp}>
            <View style={styles.modalContent}>
              <EtendoLogo onPress={() => {}} />
              <View style={styles.modalCurrentContainer}>
                <Image
                  style={styles.modalCurrentImage}
                  source={{uri: data?.currentPage?.image}}
                />
                <Text style={styles.modalCurrentLabel}>
                  {data?.currentPage?.label}
                </Text>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.modalSectionsContainer}
              >
                {data?.content?.map(
                  (item: DrawerDataContentType, index: number) => {
                    if (item.sectionType === 'sections') {
                      return (
                        <DrawerSectionsContainer
                          key={'drawerSection' + index}
                          data={item}
                          onOptionSelected={handleOptionSelected}
                        />
                      );
                    }
                  },
                )}
              </ScrollView>
            </View>
          </View>
          <View style={styles.modalContainerDown}>
            <Text style={styles.version}>{version}</Text>
            <Text style={styles.copyright}>{copyright}</Text>
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
