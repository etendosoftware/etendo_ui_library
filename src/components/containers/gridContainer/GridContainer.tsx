import React from 'react';
import { View } from 'react-native';
import { IGridContainer } from './GridContainer.types';
import { styles } from './GridContainer.styles';

const GridContainer = ({
  gap = 2,
  components = [],
  stylesContainer,
}: IGridContainer) => {
  return (
    <View
      style={[
        styles.container,
        stylesContainer,
        {
          marginHorizontal: -(gap / 2),
          marginVertical: -(gap / 2),
        },
      ]}>
      {components.map((item, index) => (
        <View
          key={index}
          style={{ marginHorizontal: gap / 2, marginVertical: gap / 2 }}>
          {item}
        </View>
      ))}
    </View>
  );
};

export default GridContainer;
