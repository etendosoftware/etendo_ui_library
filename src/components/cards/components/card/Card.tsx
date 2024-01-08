import React, { useMemo, useState } from 'react';
import { View, Pressable, Animated, ViewStyle, TextStyle } from 'react-native';
import { findPrimaryId } from '../../../../helpers/table_utils';
import { CardProps } from './Card.types';
import { styles } from './Card.style';
import {
  NEUTRAL_200,
  NEUTRAL_400,
  NEUTRAL_500,
  TERTIARY_800,
} from '../../../../styles/colors';
import SwitchColumnCard from './components/switchRowCard/SwitchRowCard';
import SwitchTitleCard from './components/switchTitleCard/SwitchTitleCard';
import { findRowTitle } from '../../../../helpers/cards_utils';
import { CardsMetadata } from '../../Cards.types';

const MAX_ROWS: number = 4;

const Card = ({ item, index, metadata, onPress }: CardProps) => {
  const [isPressable, setIsPressable] = useState<boolean>(false);
  const [shadowOpacity, setShadowOpacity] = useState<ViewStyle>({
    shadowOpacity: 0.1,
  });

  const onHoverIn = () => {
    setShadowOpacity({ shadowOpacity: 0.2 });
  };

  const onHoverOut = () => {
    setShadowOpacity({ shadowOpacity: 0.1 });
  };
  const onPressIn = () => {
    setIsPressable(true);
  };
  const onPressOut = () => {
    setIsPressable(false);
  };

  const isDisabled = (): boolean => {
    return item.isActive === false;
  };

  const changeBackground = (): ViewStyle | undefined => {
    if (isDisabled() || isPressable) {
      return { backgroundColor: NEUTRAL_200 };
    }
    return { backgroundColor: styles.container.backgroundColor };
  };

  const changeStatusBackground = (): ViewStyle | undefined => {
    if (isDisabled()) {
      return { backgroundColor: NEUTRAL_400 };
    }
    if (item.color) {
      return { backgroundColor: item.color };
    }
    return { backgroundColor: TERTIARY_800 };
  };

  const changeTextColor = (): TextStyle | {} => {
    if (isDisabled()) {
      return { color: NEUTRAL_500 };
    }
    return {};
  };

  const getColumnTitle: CardsMetadata | undefined = useMemo(() => {
    return findRowTitle(metadata);
  }, [metadata]);

  return (
    <Pressable
      disabled={isDisabled()}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => {
        if (onPress) {
          onPress(findPrimaryId(metadata, item));
        }
      }}>
      <Animated.View
        style={[styles.container, changeBackground(), shadowOpacity]}>
        <View style={[styles.status, changeStatusBackground()]} />
        <SwitchTitleCard
          row={getColumnTitle}
          item={item}
          color={changeTextColor()}
        />
        {metadata
          .filter(row => row.visible)
          .slice(0, MAX_ROWS)
          .map(
            (row, rowIndex) =>
              row.visible &&
              !row.title && (
                <SwitchColumnCard
                  key={'rowCard' + index + rowIndex}
                  row={row}
                  item={item}
                  color={changeTextColor()}
                  backgroundColor={changeBackground()}
                />
              ),
          )}
      </Animated.View>
    </Pressable>
  );
};

export default Card;
