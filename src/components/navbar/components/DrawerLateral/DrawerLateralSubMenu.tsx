import { Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './DrawerLateral.styles';
import {
  DrawerCurrentIndexType,
  DrawerDataSubMenuType,
  DrawerLatertalMenuProps,
} from '../../Navbar.types';
import {
  getCurrentSelectIndex,
  getStyleImageSelectedSubSection,
  getStyleSelected,
} from './DrawerLateralHelper';
import { NEUTRAL_0 } from '../../../../styles/colors';
import { ChevronDownIcon } from '../../../../assets/images/icons';

const DrawerLateralSubMenu = ({
  data,
  indexSection,
  currentIndex,
  indexSubSection,
  onSelectOption,
}: DrawerLatertalMenuProps) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  const [indexHover, setIndexHover] = useState<DrawerCurrentIndexType>({
    indexSection: -1,
    indexSubSection: -1,
    indexSubSectionItem: -1,
  });

  const handleOnPress = (route?: string, index?: DrawerCurrentIndexType) => {
    onSelectOption(route, index);
    setTimeout(() => {
      setShowSubMenu(!showSubMenu);
    }, 100);
  };
  const removeMarginBottom = (isRemove: boolean) => {
    if (isRemove) {
      return { marginBottom: 0 };
    }
  };

  const { image, label, subMenu } = data || {};

  return (
    <>
      <Pressable
        onHoverIn={() => {
          setIndexHover({
            indexSection: indexSection,
            indexSubSection: indexSubSection,
            indexSubSectionItem: -1,
          });
        }}
        onHoverOut={() => {
          setIndexHover({
            indexSection: -1,
            indexSubSection: -1,
            indexSubSectionItem: -1,
          });
        }}
        style={[
          styles.modalSectionItemContainer,
          getStyleSelected(indexHover, indexSection, indexSubSection, -1),
          removeMarginBottom(showSubMenu),
          showSubMenu && { marginBottom: 0 },
        ]}
        onPress={() => {
          setShowSubMenu(!showSubMenu);
        }}>
        {image &&
          React.cloneElement(image, {
            ...image.props,
            fill: getStyleImageSelectedSubSection(
              currentIndex,
              indexSection,
              indexSubSection,
            ),
          })}
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.modalSectionItemText}>
          {label}
        </Text>
        <ChevronDownIcon
          style={styles.modalSectionMenuDropdownImage}
          fill={NEUTRAL_0}
        />
      </Pressable>
      {showSubMenu && (
        <View style={styles.modalSectionSubMenuContainer}>
          {subMenu?.map((item: DrawerDataSubMenuType, index) => {
            return (
              <Pressable
                onHoverIn={() => {
                  setIndexHover({
                    indexSection: indexSection,
                    indexSubSection: indexSubSection,
                    indexSubSectionItem: index,
                  });
                }}
                onHoverOut={() => {
                  setIndexHover({
                    indexSection: -1,
                    indexSubSection: -1,
                    indexSubSectionItem: -1,
                  });
                }}
                key={'drawerDataSubMenu' + index}
                onPress={() =>
                  handleOnPress(
                    item?.route,
                    getCurrentSelectIndex(indexSection, indexSubSection, index),
                  )
                }
                style={[
                  styles.modalSectionSubItemContainer,
                  subMenu &&
                    subMenu.length - 1 === index && { marginBottom: 0 },
                  getStyleSelected(
                    currentIndex,
                    indexSection,
                    indexSubSection,
                    index,
                  ),
                  getStyleSelected(
                    indexHover,
                    indexSection,
                    indexSubSection,
                    index,
                  ),
                ]}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.modalSectionItemText}>
                  {item?.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </>
  );
};

export default DrawerLateralSubMenu;
