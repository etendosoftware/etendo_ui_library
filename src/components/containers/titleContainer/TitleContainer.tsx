import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { DEFAULT } from './TitleContainer.default';
import { ITitleContainer } from './TitleContainer.types';
import { GridContainer } from '../gridContainer';

const TitleContainer: FC<ITitleContainer> = ({
  buttons,
  title,
  styleContainer,
  styleTitle,
  styleGridContainer,
  buttonsGap,
}) => {
  return (
    <View style={[DEFAULT.TITLE_CONTAINER, styleContainer]}>
      <Text
        style={[DEFAULT.TITLE_STYLE, styleTitle]}
        numberOfLines={1}
        ellipsizeMode="tail">
        {title}
      </Text>
      {buttons && (
        <GridContainer
          components={buttons}
          stylesContainer={styleGridContainer}
          gap={buttonsGap}
        />
      )}
    </View>
  );
};

export default TitleContainer;
