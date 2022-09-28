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

export const TabStyleVariant: Record<
  TabStyleType,
  {
    container: ViewStyle;
    containerTabs?: ViewStyle;
    tabs: ViewStyle;
    tabsActive: ViewStyle;
    itemText: TextStyle;
  }
> = {
  primary: {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    tabs: {
      marginTop: 50,
      paddingHorizontal: 20,
      height: 45,
      backgroundColor: '#eff1f8',
      borderBottomWidth: 3,
      borderBottomColor: '#161f56',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 4,
      borderTopColor: 'transparent',
    },
    tabsActive: {
      backgroundColor: '#161f56',
      borderTopWidth: 4,
      borderTopColor: '#fad614',
    },
    itemText: {
      fontFamily: 'Inter-SemiBold',
      textTransform: 'uppercase',
    },
  },
  secondary: {
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#E5E5E5',
      flexDirection: 'row',
    },
    containerTabs: {
      borderRadius: 10,
      backgroundColor: '#fff',
      paddingHorizontal: 11,
      height: 62,
    },
    tabs: {
      marginHorizontal: 11,
      paddingHorizontal: 20,
      height: 37,
      marginTop: 50,
      backgroundColor: '#EBEBEB',
      borderBottomColor: '#161f56',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    tabsActive: {backgroundColor: '#FAD614'},
    itemText: {
      fontFamily: 'Inter-SemiBold',
      textTransform: 'uppercase',
    },
  },
};
