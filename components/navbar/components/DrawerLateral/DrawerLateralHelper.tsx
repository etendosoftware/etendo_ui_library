import {ColorValue, ViewStyle} from 'react-native';
import {DrawerCurrentIndexType} from '../../Navbar.types';
import { NEUTRALS_0, PRIMARY_80, SECONDARY_100 } from '../../../../styles/colors';

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
    return {backgroundColor: PRIMARY_80};
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
    return SECONDARY_100;
  }
  return NEUTRALS_0;
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
    return SECONDARY_100;
  }
  return NEUTRALS_0;
};
