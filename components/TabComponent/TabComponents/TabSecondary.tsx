{
  /* Imports */
}
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TabItem from './TabItemSecondary';

{
  /* Type declaration */
}
type Info = {
  name: string;
  route: string;
  key: string;
};

export type TabsProps = {
  data: Array<any>;
  onChangeSelected: any;
};

{
  /* Styles */
}
const styles = StyleSheet.create({
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
  tabsActive: {
    backgroundColor: '#FAD614',
  },
});

{
  /* Tab component */
}
export const TabSecondary = ({data, onChangeSelected}: TabsProps) => {
  {
    /* Variable to handle the state of the tabs */
  }
  const [toggleItem, setToggleItem] = useState(0);

  return (
    <ScrollView horizontal={true}>
      {/* Mapping of each item */}
      {data.map((item: any, index: number) => {
        {
          /* TabItem rendering */
        }
        return (
          <TabItem
            style={
              toggleItem === index
                ? [styles.tabs, styles.tabsActive]
                : styles.tabs
            }
            item={item}
            index={index}
            onPress={() => {
              setToggleItem(index);
              {
                /* Allows to detect the selected item */
              }
              onChangeSelected({key: item.key, route: item.route});
            }}
            key={item.key}
            toggleItem={toggleItem}
          />
        );
      })}
    </ScrollView>
  );
};
