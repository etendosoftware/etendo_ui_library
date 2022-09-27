/* Imports */
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TabItem from './TabItem';

/* Type declaration */
type Info = {
  name: string;
  route: string;
  key: string;
};

export type TabsProps = {
  data: Array<any>;
  onChangeSelected: any;
  style: 'primary' | 'secundary' | 'tertiary';
};

/* Styles - This function allows you to obtain the styles of the Tab component */
const getStyle = (style: any, toggleItem: number, index: number) => {
  let styles;

  /* Primary style */
  if (style === 'primary') {
    styles = StyleSheet.create({
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
    styles = StyleSheet.create({
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
    /* Secundary style */
  } else if (style === 'secundary') {
    styles = StyleSheet.create({
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
  }

  /* Returns the style chosen by the programmer */
  if (toggleItem === index) {
    return [styles?.tabs, styles?.tabsActive];
  } else {
    return styles?.tabs;
  }
};

/* Tab component */
const Tab = ({data, onChangeSelected, style}: TabsProps) => {
  /* Variable to handle the state of the tabs */
  const [toggleItem, setToggleItem] = useState(0);

  return (
    <ScrollView horizontal={true}>
      {data.map((item: any, index: number) => {
        return (
          <TabItem
            style={getStyle(style, toggleItem, index)}
            styleText={style}
            item={item}
            index={index}
            onPress={() => {
              /* Allows to detect the selected item */
              setToggleItem(index);
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

export default Tab;
