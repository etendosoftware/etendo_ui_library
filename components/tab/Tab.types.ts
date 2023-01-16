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
  onChangeSelected: (Info: Info | undefined) => Info | Array<Info>;
  style: TabStyleType;
  typeSizeText: TabStyleFontSize;
  renderItem: any;
  pathname?: any;
}

export interface TabItemProps {
  style: StyleProp<ViewStyle>;
  item: Info;
  onPress: () => void;
  index: number;
  toggleItem: number;
  styleText: TabStyleType;
  sizeText: TabStyleFontSize;
  renderItem: (item: any, styles: any) => JSX.Element;
  pathname?: string;
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
    itemTextSecundary: TextStyle;
  }
>;

export type TabStyleText = Record<
  TabStyleFontSize,
  {
    fontSize: TextStyle;
  }
>;
