// Imports
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import {
  NEUTRAL_200,
  NEUTRAL_500,
  NEUTRAL_700,
  PRIMARY_100,
  SECONDARY_100,
  TERTIARY_50,
  TERTIARY_80,
} from '../../styles/colors';
import { TabItemType, TabProps } from './Tab.types';
import { TabStyleVariants, mapContainerViewStyle } from './Tab.styles';

const Tab = ({ data, currentIndex, onPressTab, typeStyle }: TabProps) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>();
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

  const hoveredStyle = (index: number) => {
    let HoveredColor;
    if (index === hoveredTab) {
      HoveredColor = TERTIARY_80;
      return HoveredColor;
    } else {
      HoveredColor = TERTIARY_50;
      return HoveredColor;
    }
  };

  const getTabStyle = (index: number) => {
    switch (typeStyle) {
      case 'primary':
        return {
          borderBottomColor:
            index === currentIndexSelected
              ? PRIMARY_100
              : index === hoveredTab
              ? NEUTRAL_700
              : NEUTRAL_500,
          borderBottomWidth: index === currentIndexSelected ? 2 : 1,
        };
      case 'secondary':
        return {
          backgroundColor:
            index === currentIndexSelected
              ? SECONDARY_100
              : index === hoveredTab
              ? TERTIARY_50
              : NEUTRAL_200,
        };
      case 'terciary':
        return {
          backgroundColor:
            index === currentIndexSelected ? PRIMARY_100 : hoveredStyle(index),
          borderTopColor:
            index === currentIndexSelected ? SECONDARY_100 : 'transparent',
        };
    }
  };

  const [hasScroll, setHasScroll] = useState(false);

  const [containerWidth, setContainerWidth] = useState(0);
  const [mapContainer, setMapContainer] = useState(0);

  const handleContainerLayout = (event: any) => {
    const width = event.nativeEvent.layout.width;
    setContainerWidth(width);
  };
  const handleMapContainerLayout = (event: any) => {
    const width = event.nativeEvent.layout.width;
    setMapContainer(width);
  };

  useEffect(() => {
    if (mapContainer > containerWidth) {
      setHasScroll(true);
    } else {
      setHasScroll(false);
    }
  }, [containerWidth]);

  return (
    <ScrollView
      onLayout={handleContainerLayout}
      horizontal
      contentContainerStyle={[
        TabStyleVariants[typeStyle].container,
        !hasScroll && { flex: 1 },
      ]}>
      <View
        onLayout={handleMapContainerLayout}
        style={{ ...mapContainerViewStyle }}>
        {data?.map((item: TabItemType, index: number) => (
          <Pressable
            key={item.route}
            style={({ pressed }) => [
              TabStyleVariants[typeStyle].tab,
              getTabStyle(index),
            ]}
            onPress={() => handleOnPress(item, index)}
            onHoverIn={() => handleHoverIn(index)}
            onHoverOut={handleHoverOut}>
            <Text
              style={[
                index === currentIndexSelected
                  ? TabStyleVariants[typeStyle].text
                  : index === hoveredTab
                  ? TabStyleVariants[typeStyle].hoveredColor
                  : TabStyleVariants[typeStyle].textDisabled,
              ]}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tab;
