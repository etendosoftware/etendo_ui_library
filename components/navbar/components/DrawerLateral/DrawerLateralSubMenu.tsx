import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './DrawerLateral.styles';
import {
  DrawerCurrentIndexType,
  DrawerDataSubMenuType,
  DrawerLatertalMenuProps,
} from '../../Navbar.types';
import {WHITE} from '../../../../styles/colors';
import {ArrowDown} from '../../../../assets/images/icons/ArrowDown';
import {
  getCurrentSelectIndex,
  getStyleImageSelectedSubSection,
  getStyleSelected,
} from './DrawerLateralHelper';

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

  const removeMarginBottom = (isRemove: boolean) => {
    if (isRemove) {
      return {marginBottom: 0};
    }
  };

  const handleOnPress = (route?: string, index?: DrawerCurrentIndexType) => {
    onSelectOption(route, index);
    setShowSubMenu(!showSubMenu);
  };

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
        ]}
        onPress={() => {
          setShowSubMenu(!showSubMenu);
        }}
      >
        {data?.image && (
          <data.image.type
            {...data.image.props}
            fill={getStyleImageSelectedSubSection(
              currentIndex,
              indexSection,
              indexSubSection,
            )}
            style={styles.modalSectionItemImage}
          />
        )}
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.modalSectionItemText}
        >
          {data?.label}
        </Text>
        <ArrowDown style={styles.modalSectionMenuDropdownImage} fill={WHITE} />
      </Pressable>
      {showSubMenu && (
        <View style={styles.modalSectionSubMenuContainer}>
          {data?.subMenu?.map((item: DrawerDataSubMenuType, index) => {
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
                  removeMarginBottom(
                    data?.subMenu ? data.subMenu.length - 1 === index : false,
                  ),
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
                ]}
              >
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.modalSectionItemText}
                >
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
