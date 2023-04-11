import {ColorValue, ViewStyle} from 'react-native';
import {DrawerCurrentIndexType} from '../../Navbar.types';
import {BLUE_20, WHITE, YELLOW} from '../../../../styles/colors';

export const getCurrentSelectIndex = (
  indexSection: number,
  indexSubSection: number,
  indexSubSectionItem: number,
): DrawerCurrentIndexType | undefined => {
  return {
    indexSection: indexSection,
    indexSubSection: indexSubSection,
    indexSubSectionItem: indexSubSectionItem,
  };
};

export const getStyleSelected = (
  currentPageIndex?: DrawerCurrentIndexType,
  indexSection?: number,
  indexSubSection?: number,
  indexSubSectionItem?: number,
): ViewStyle | undefined => {
  if (
    currentPageIndex?.indexSection === indexSection &&
    currentPageIndex?.indexSubSection === indexSubSection &&
    currentPageIndex?.indexSubSectionItem === indexSubSectionItem
  ) {
    return {backgroundColor: BLUE_20};
  }
};

export const getStyleImageSelected = (
  currentPageIndex?: DrawerCurrentIndexType,
  indexSection?: number,
  indexSubSection?: number,
  indexSubSectionItem?: number,
): ColorValue => {
  if (
    currentPageIndex?.indexSection === indexSection &&
    currentPageIndex?.indexSubSection === indexSubSection &&
    currentPageIndex?.indexSubSectionItem === indexSubSectionItem
  ) {
    return YELLOW;
  }
  return WHITE;
};

export const getStyleImageSelectedSubSection = (
  currentPageIndex?: DrawerCurrentIndexType,
  indexSection?: number,
  indexSubSection?: number,
): ColorValue => {
  if (
    currentPageIndex?.indexSection === indexSection &&
    currentPageIndex?.indexSubSection === indexSubSection
  ) {
    return YELLOW;
  }
  return WHITE;
};
