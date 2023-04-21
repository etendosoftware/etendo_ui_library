// Imports
import React, {useState} from 'react';
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

  const handleHoverIn = (index: number) => {
    setHoveredTab(index);
  };

  const handleHoverOut = () => {
    setHoveredTab(null);
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
                index === currentIndex
                  ? PRIMARY_100
                  : index === hoveredTab
                  ? TERTIARY_30
                  : TERTIARY_50,
              borderTopColor:
                index === currentIndex ? SECONDARY_100 : 'transparent',
            },
          ]}
          onPress={() => onPressTab && onPressTab(item.route, index)}
          onHoverIn={() => handleHoverIn(index)}
          onHoverOut={handleHoverOut}
        >
          <Text
          ellipsizeMode='tail'
          numberOfLines={1}
            style={{
              color: index === currentIndex ? NEUTRAL_0 : PRIMARY_100,
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
