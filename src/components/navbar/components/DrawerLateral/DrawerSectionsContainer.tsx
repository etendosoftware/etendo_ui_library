import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  DrawerCurrentIndexType,
  DrawerDataSectionType,
  DrawerSectionsContainerType,
} from '../../Navbar.types';
import {styles} from './DrawerLateral.styles';
import DrawerLateralSubMenu from './DrawerLateralSubMenu';
import {
  getCurrentSelectIndex,
  getStyleImageSelected,
  getStyleSelected,
} from './DrawerLateralHelper';

const DrawerSectionsContainer = ({
  data,
  currentIndex,
  indexSection,
  onOptionSelected,
}: DrawerSectionsContainerType) => {
  const [indexHover, setIndexHover] = useState<DrawerCurrentIndexType>({
    indexSection: -1,
    indexSubSection: -1,
    indexSubSectionItem: -1,
  });
  return (
    <>
      <View>
        {data?.titleSection && (
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.modalSectionTitle}>
            {data.titleSection}
          </Text>
        )}
        <View style={styles.modalSectionContentContainer}>
          {data?.dataSection?.map(
            (item: DrawerDataSectionType, index: number) => {
              if (item?.subMenu) {
                return (
                  <DrawerLateralSubMenu
                    key={'DrawerLateralSubMenu' + index}
                    data={item}
                    indexSection={indexSection}
                    indexSubSection={index}
                    currentIndex={currentIndex}
                    onSelectOption={(
                      route?: string,
                      index?: DrawerCurrentIndexType,
                    ) => {
                      onOptionSelected(route, index);
                    }}
                  />
                );
              } else {
                return (
                  <Pressable
                    onHoverIn={() => {
                      setIndexHover({
                        indexSection: indexSection,
                        indexSubSection: index,
                        indexSubSectionItem: 0,
                      });
                    }}
                    onHoverOut={() => {
                      setIndexHover({
                        indexSection: -1,
                        indexSubSection: -1,
                        indexSubSectionItem: -1,
                      });
                    }}
                    key={'DrawerDataSection' + index}
                    style={[
                      styles.modalSectionItemContainer,
                      getStyleSelected(currentIndex, indexSection, index, 0),
                      getStyleSelected(indexHover, indexSection, index, 0),
                    ]}
                    onPress={() =>
                      onOptionSelected(
                        item?.route,
                        getCurrentSelectIndex(indexSection, index, 0),
                      )
                    }>
                    {item?.image &&
                      React.cloneElement(item.image, {
                        fill: getStyleImageSelected(
                          currentIndex,
                          indexSection,
                          index,
                          0,
                        ),
                        style: styles.modalSectionItemImage,
                      })}
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.modalSectionItemText}>
                      {item?.label}
                    </Text>
                  </Pressable>
                );
              }
            },
          )}
        </View>
      </View>
    </>
  );
};

export default DrawerSectionsContainer;
