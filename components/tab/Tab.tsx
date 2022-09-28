/* Imports */
import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import TabItem from './TabItem';
import {TabProps, TabItemProps, TabStyleVariant} from './Tab.types';
import {TabStyleType} from './Tab.types';

/* Styles - This function allows you to obtain the styles of the Tab component */
const getStyle = (style: TabStyleType, toggleItem: number, index: number) => {
  /* Returns the style chosen by the programmer */
  if (toggleItem === index) {
    return [TabStyleVariant[style].tabs, TabStyleVariant[style].tabsActive];
  } else {
    return TabStyleVariant[style].tabs;
  }
};

/* Tab component */
const Tab = ({data, onChangeSelected, style}: TabProps) => {
  /* Variable to handle the state of the tabs */
  const [toggleItem, setToggleItem] = useState<number>(0);

  return (
    <ScrollView horizontal={true}>
      {data.map((item: TabItemProps['item'], index: number) => {
        return (
          <TabItem
            style={getStyle(style, toggleItem, index)}
            styleText={style}
            item={item}
            index={index}
            onPress={() => {
              /* Allows to detect the selected item */
              setToggleItem(index);
              onChangeSelected({
                name: item.name,
                route: item.route,
                key: item.key,
              });
            }}
            key={item.key}
            toggleItem={toggleItem}
          />
        );
      })}
    </ScrollView>
  );
};

export default Tab;
