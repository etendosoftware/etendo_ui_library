/* Imports */
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

/* Type declaration */
export type Info = {
  name: string;
  route: string;
  key: string;
};

export interface TabProps {
  data: Info[];
  onChangeSelected: (Info: Info | undefined) => Info;
  style: TabStyleType;
  typeSizeText: TabStyleFontSize;
}

export interface TabItemProps {
  style: StyleProp<ViewStyle>;
  item: Info;
  onPress: () => void;
  index: number;
  toggleItem: number;
  styleText: TabStyleType;
  sizeText: TabStyleFontSize;
}

/* Declaration of style types */
export type TabStyleType = 'primary' | 'secondary';
export type TabStyleFontSize = 'small' | 'medium' | 'large';

export type TabStyleRecord = Record<
  TabStyleType,
  {
    container: ViewStyle;
    containerSecundary: ViewStyle;
    containerTabs?: ViewStyle;
    tabs: ViewStyle;
    tabsSecundary: ViewStyle;
    tabsActive: ViewStyle;
    tabsActiveSecundary: ViewStyle;
    itemText: TextStyle;
  }
>;

export type TabStyleText = Record<
  TabStyleFontSize,
  {
    fontSize: TextStyle;
  }
>;
