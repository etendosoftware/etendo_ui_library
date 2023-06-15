// Imports
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  NEUTRAL_0,
  PRIMARY_100,
  SECONDARY_100,
  TERTIARY_30,
  TERTIARY_50,
} from '../../styles/colors';
import {TabItemType, TabProps} from './Tab.types';
import {styles} from './Tab.styles';

const Tab = ({data, currentIndex, onPressTab}: TabProps) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [currentIndexSelected, setCurrentIndexSelected] = useState<number>(0);

  useEffect(() => {
    setCurrentIndexSelected(currentIndex);
  }, [currentIndex]);

  const handleHoverIn = (index: number) => {
    setHoveredTab(index);
  };

  const handleHoverOut = () => {
    setHoveredTab(null);
  };

  const handleOnPress = (item: TabItemType, index: number) => {
    if (onPressTab) {
      onPressTab(item.route, index);
    }
    setCurrentIndexSelected(index);
  };

  return (
    <View style={styles.container}>
      {data?.map((item: TabItemType, index: number) => (
        <Pressable
          key={index}
          style={[
            styles.tab,
            {
              backgroundColor:
                index === currentIndexSelected
                  ? PRIMARY_100
                  : index === hoveredTab
                  ? TERTIARY_30
                  : TERTIARY_50,
              borderTopColor:
                index === currentIndexSelected ? SECONDARY_100 : 'transparent',
            },
          ]}
          onPress={() => handleOnPress(item, index)}
          onHoverIn={() => handleHoverIn(index)}
          onHoverOut={handleHoverOut}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={{
              color: index === currentIndexSelected ? NEUTRAL_0 : PRIMARY_100,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tab;
