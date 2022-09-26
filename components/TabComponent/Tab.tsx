{/* Imports */}
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import TabItem from './TabItem';

{/* Type declaration */}
type Info = {
  name: string;
  route: string;
  key: string;
};

export type TabsProps = {
  data: Array<any>;
  onChangeSelected: any;
};

{/* Styles */}
const styles = StyleSheet.create({
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
});

{/* Tab component */}
export const Tab = ({ data, onChangeSelected }: TabsProps) => {
  {/* Variable to handle the state of the tabs */}
  const [toggleItem, setToggleItem] = useState(0);

  return (
      <ScrollView horizontal={true}>
        {/* Mapping of each item */}
        {data.map((item: any, index: number) => {

          {/* TabItem rendering */}
          return (
            <TabItem
              style={toggleItem === index
                ? [styles.tabs, styles.tabsActive]
                : styles.tabs}
              item={item}
              index={index}
              onPress={() => {
                setToggleItem(index); {/* Allows to detect the selected item */}
                onChangeSelected({key: item.key, route: item.route})
              }}
              key={item.key}
              toggleItem={toggleItem} />
          );
        })}
      </ScrollView>
  );
};
