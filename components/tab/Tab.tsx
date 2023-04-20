// Imports
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { NEUTRALS_0, PRIMARY_100, SECONDARY_100, TERTIARY_30, TERTIARY_50 } from '../../styles/colors';
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
                  ? PRIMARY_100
                  : index === hoveredTab
                  ? TERTIARY_30
                  : TERTIARY_50,
              height: height,
              borderTopColor: index === selectedTab ? SECONDARY_100 : 'transparent',
            },
          ]}
          onPress={() => (setSelectedTab ? setSelectedTab(index) : {})}
          onHoverIn={() => handleHoverIn(index)}
          onHoverOut={handleHoverOut}
        >
          <Text
            style={{
              color: index === selectedTab ? NEUTRALS_0 : PRIMARY_100,
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
    borderBottomColor: PRIMARY_100,
    borderTopWidth: 4,
  },
});

export default Tab;
