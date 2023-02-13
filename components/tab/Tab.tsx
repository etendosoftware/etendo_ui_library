// Imports
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BLUE, GREY_BLUE_50, WHITE, YELLOW} from '../../styles/colors';
import {TabProps} from './Tab.types';

const Tab = ({
  tabInformation,
  selectedTab,
  setSelectedTab,
  height,
  fontFamily,
  fontWeight,
}: TabProps) => {
  return (
    <View style={styles.container}>
      {tabInformation.map((tabItem: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            {
              flex: 1 / tabInformation.length,
              backgroundColor: index === selectedTab ? BLUE : GREY_BLUE_50,
              height: height,
              borderTopColor: index === selectedTab ? YELLOW : 'transparent',
            },
          ]}
          onPress={() => (setSelectedTab ? setSelectedTab(index) : {})}
        >
          <Text
            style={{
              color: index === selectedTab ? WHITE : BLUE,
              fontFamily: fontFamily,
              fontWeight: fontWeight,
            }}
          >
            {tabItem.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: BLUE,
    borderTopWidth: 4,
  },
});

export default Tab;
