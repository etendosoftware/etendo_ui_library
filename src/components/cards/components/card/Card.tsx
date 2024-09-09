import React, { useEffect, useMemo, useState } from 'react';
import { View, Pressable, ViewStyle, TextStyle } from 'react-native';
import { findPrimaryId } from '../../../../helpers/table_utils';
import { CardProps } from './Card.types';
import { styles } from './Card.style';
import {
  NEUTRAL_200,
  NEUTRAL_400,
  NEUTRAL_500,
  TERTIARY_50,
  TERTIARY_800,
} from '../../../../styles/colors';
import SwitchColumnCard from './components/switchRowCard/SwitchRowCard';
import SwitchTitleCard from './components/switchTitleCard/SwitchTitleCard';

const Card = ({
  item,
  index,
  metadata,
  maxRows,
  maxTitles,
  onPress,
  onHoldCard,
  handleItemsSelected,
  isSelectionMode,
}: CardProps) => {
  const [isPressable, setIsPressable] = useState<boolean>(false);
  const [shadowOpacity, setShadowOpacity] = useState<ViewStyle>({
    shadowOpacity: 0.1,
  });
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (!isSelectionMode) {
      setIsSelected(false);
    }
  }, [isSelectionMode]);

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
    if (isSelectionMode && isSelected) {
      return { backgroundColor: TERTIARY_50 };
    }
    return { backgroundColor: styles.container.backgroundColor };
  };

  const addBorderColor = (): ViewStyle => {
    const borderColor =
      isSelectionMode && isSelected ? TERTIARY_800 : 'transparent';
    return {
      borderWidth: 2,
      borderLeftColor: borderColor,
      borderRightColor: borderColor,
      borderBottomColor: borderColor,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderTopWidth: 0,
      borderTopColor: 'transparent',
    };
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

  const { visibleRows, visibleTitles } = useMemo(() => {
    const visibleMetadata = metadata.filter(row => row.visible);
    return {
      visibleRows: visibleMetadata.slice(0, maxRows),
      visibleTitles: visibleMetadata
        .filter(row => row.title)
        .slice(0, maxTitles),
    };
  }, [metadata, maxRows, maxTitles]);

  return (
    <Pressable
      disabled={isDisabled()}
      onLongPress={() => {
        onHoldCard(true);
        handleItemsSelected(item);
        setIsSelected(!isSelected);
      }}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => {
        if (onPress) {
          onPress(findPrimaryId(metadata, item));
        }
        if (isSelectionMode) {
          handleItemsSelected(item);
          setIsSelected(!isSelected);
        }
      }}>
      <View style={[styles.container, shadowOpacity, changeBackground()]}>
        <View style={[styles.status, changeStatusBackground()]} />
        <View style={[addBorderColor()]}>
          <View style={[styles.spacingCard]} />
          {visibleTitles.map((row, rowIndex) => (
            <SwitchTitleCard
              key={`title-${index}-${rowIndex}`}
              row={row}
              item={item}
              color={changeTextColor()}
              isEmptyData={!visibleRows.length}
            />
          ))}
          {visibleRows.map((row, rowIndex) => (
            <SwitchColumnCard
              key={`rowCard-${index}-${rowIndex}`}
              row={row}
              item={item}
              color={changeTextColor()}
              backgroundColor={changeBackground()}
            />
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
