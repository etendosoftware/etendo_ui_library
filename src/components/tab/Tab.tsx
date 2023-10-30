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

  const getPrimaryBorderColor = (index: number) => {
    if (index === currentIndexSelected) {
      return PRIMARY_100;
    } else if (index === hoveredTab) {
      return NEUTRAL_700;
    } else {
      return NEUTRAL_500;
    }
  };

  const getSecondaryBackgroundColor = (index: number) => {
    if (index === currentIndexSelected) {
      return SECONDARY_100;
    } else if (index === hoveredTab) {
      return TERTIARY_50;
    } else {
      return NEUTRAL_200;
    }
  };

  const getTabTextStyle = (index: number) => {
    if (index === currentIndexSelected) {
      return TabStyleVariants[typeStyle].text;
    } else if (index === hoveredTab) {
      return TabStyleVariants[typeStyle].hoveredColor;
    } else {
      return TabStyleVariants[typeStyle].textDisabled;
    }
  };

  const getTabStyle = (index: number) => {
    switch (typeStyle) {
      case 'primary':
        return {
          borderBottomColor: getPrimaryBorderColor(index),
          borderBottomWidth: index === currentIndexSelected ? 2 : 1,
        };
      case 'secondary':
        return {
          backgroundColor: getSecondaryBackgroundColor(index),
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
            <Text style={getTabTextStyle(index)}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Tab;
