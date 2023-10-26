/* Imports */

import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type TabItemType = {
  name: string;
  route: string;
};
export type TabStyleType = 'primary' | 'secondary' | 'terciary';

export type tabStyleVariant = Record<
  TabStyleType,
  {
    container: ViewStyle;
    tab: ViewStyle;
    text: StyleProp<TextStyle>;
    textDisabled: TextStyle;
  }
>;

export interface TabProps {
  data?: TabItemType[];
  currentIndex: number;
  onPressTab?: (route: string, index: number) => void;
  typeStyle: TabStyleType;
}
