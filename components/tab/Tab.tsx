// Imports
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  BLUE,
  GREY_BLUE_30,
  GREY_BLUE_50,
  WHITE,
  YELLOW,
} from '../../styles/colors';
import {TabProps} from './Tab.types';

const Tab = ({
  tabInformation,
  selectedTab,
  setSelectedTab,
  height,
  fontFamily,
  fontWeight,
}: TabProps) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  const handleHoverIn = (index: number) => {
    setHoveredTab(index);
  };

  const handleHoverOut = () => {
    setHoveredTab(null);
  };

  return (
    <View style={styles.container}>
      {tabInformation.map((tabItem: any, index: number) => (
        <Pressable
          key={index}
          style={[
            styles.tab,
            {
              flex: 1 / tabInformation.length,
              backgroundColor:
                index === selectedTab
                  ? BLUE
                  : index === hoveredTab
                  ? GREY_BLUE_30
                  : GREY_BLUE_50,
              height: height,
              borderTopColor: index === selectedTab ? YELLOW : 'transparent',
            },
          ]}
          onPress={() => (setSelectedTab ? setSelectedTab(index) : {})}
          onHoverIn={() => handleHoverIn(index)}
          onHoverOut={handleHoverOut}
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
        </Pressable>
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
