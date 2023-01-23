/* Imports */
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import {TabProps, Info, TabStyleType} from './Tab.types';
import {TabStyleVariant} from './Tab.styles';
import TabItemSecundary from './TabItemSecundary';

/* TabSecundary component */
const TabSecundary = ({
  data,
  onChangeSelected,
  style,
  typeSizeText,
  renderItem,
  pathname,
}: TabProps) => {
  /* Variable to handle the state of the tabs */
  const [toggleItem, setToggleItem] = useState<number>(-1);

  /* Styles - This function allows you to obtain the styles of the Tab component */
  const getStyle = (style: TabStyleType, item: Info, pathname: any) => {
    /* Returns the style chosen by the programmer */
    if (item.route === pathname) {
      return [
        TabStyleVariant[style].tabsSecundary,
        TabStyleVariant[style].tabsActiveSecundary,
      ];
    } else {
      return TabStyleVariant[style].tabsSecundary;
    }
  };

  return (
    <View style={TabStyleVariant.primary.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item: Info, index: number) => {
          return (
            <TabItemSecundary
              style={getStyle(style, item, pathname)}
              styleText={style}
              sizeText={typeSizeText}
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
              renderItem={renderItem}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TabSecundary;
