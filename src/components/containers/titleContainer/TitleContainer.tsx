import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { DEFAULT } from './TitleContainer.default';
import { ITitleContainer } from './TitleContainer.types';
import { ButtonContainer } from '../buttonContainer';

const TitleContainer: FC<ITitleContainer> = ({
  buttons,
  style,
  title,
  textStyle,
}) => {
  return (
    <View style={[DEFAULT.TITLE_CONTAINER, style]}>
      <Text style={[DEFAULT.TITLE_STYLE, textStyle]}>{title}</Text>
      {buttons && (
        <ButtonContainer buttons={buttons} style={{ paddingVertical: 0 }} />
      )}
    </View>
  );
};

export default TitleContainer;
