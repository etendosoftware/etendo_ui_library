/* Imports */
import React, {useState} from 'react';
import {ScrollView, useWindowDimensions, View} from 'react-native';

import TabItem from './TabItem';
import {TabProps, Info, TabStyleType} from './Tab.types';
import {TabStyleVariant} from './Tab.styles';
import {GREY_BLUE_30, BLUE} from '../../styles/colors';
import Link from 'next/link';
import {useRouter} from 'next/router';

/* Styles - This function allows you to obtain the styles of the Tab component */

const getStyle = (style: TabStyleType, item: Info, pathname: any) => {
  /* Returns the style chosen by the programmer */
  if (item.route === pathname) {
    return [TabStyleVariant[style].tabs, TabStyleVariant[style].tabsActive];
  } else {
    return TabStyleVariant[style].tabs;
  }
};

/* Tab component */
const Tab = ({data, onChangeSelected, style, typeSizeText}: TabProps) => {
  /* Variable to handle the state of the tabs */
  const [toggleItem, setToggleItem] = useState<number>(-1);
  const router = useRouter();
  const {pathname} = router;

  return (
    <View style={TabStyleVariant.primary.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item: Info, index: number) => {
          return (
            <TabItem
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
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Tab;
