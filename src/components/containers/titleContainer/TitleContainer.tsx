import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { DEFAULT } from './TitleContainer.default';
import { ITitleContainer } from './TitleContainer.types';
import { ButtonContainer } from '../buttonContainer';

const TitleContainer: FC<ITitleContainer> = ({
  buttons,
  style,
  title,
  textStyle,
  buttonsGap,
}) => {
  const [arrayOfButtons, setArrayOfButtons] = useState<ReactNode[]>([]);

  useEffect(() => {
    // This adds a gap between buttons if it's possible using a dummy View
    const renderButtonsWithGaps = (buttonsList: ReactNode[]) => {
      const result = [];
      for (let i = 0; i < buttonsList.length; i++) {
        result.push(buttonsList[i]);
        if (i < buttonsList.length - 1) {
          result.push(
            <View
              style={[
                DEFAULT.BUTTON_CONTAINER,
                buttonsGap ? { width: buttonsGap } : null,
              ]}
              key={`view-${i}`}
            />,
          );
        }
      }
      return result;
    };

    if (buttons) {
      setArrayOfButtons(renderButtonsWithGaps(buttons));
    }
  }, [buttons, buttonsGap]);

  return (
    <View style={[DEFAULT.TITLE_CONTAINER, style]}>
      <Text style={[DEFAULT.TITLE_STYLE, textStyle]}>{title}</Text>
      {arrayOfButtons && (
        <ButtonContainer
          buttons={arrayOfButtons}
          style={{ paddingVertical: 0, gap: 0 }}
        />
      )}
    </View>
  );
};

export default TitleContainer;
