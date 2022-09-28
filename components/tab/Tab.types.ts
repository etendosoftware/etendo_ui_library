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
}

export interface TabItemProps {
  style: StyleProp<ViewStyle>;
  item: Info;
  onPress: () => void;
  index: number;
  toggleItem: number;
  styleText: TabStyleType;
}

/* Declaration of style types */
export type TabStyleType = 'primary' | 'secondary';

export type TabStyleRecord = Record<
  TabStyleType,
  {
    container: ViewStyle;
    containerTabs?: ViewStyle;
    tabs: ViewStyle;
    tabsActive: ViewStyle;
    itemText: TextStyle;
  }
>;
