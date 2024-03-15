import React from 'react';
import { View } from 'react-native';
import { IGridContainer } from './GridContainer.types';
import { styles } from './GridContainer.styles';

const GridContainer = ({
  gapVertical = 12,
  gapHorizontal = 12,
  components = [],
  stylesContainer,
}: IGridContainer) => {
  return (
    <View
      style={[
        styles.container,
        stylesContainer,
        {
          marginHorizontal: -(gapHorizontal / 2),
          marginVertical: -(gapVertical / 2),
        },
      ]}>
      {components.map((item, index) => (
        <View
          key={index}
          style={{ marginHorizontal: gapHorizontal / 2, marginVertical: gapVertical / 2 }}>
          {item}
        </View>
      ))}
    </View>
  );
};

export default GridContainer;
