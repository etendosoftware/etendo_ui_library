import React, { memo, useMemo, useState, useCallback } from 'react';
import {
  View,
  Pressable,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
} from 'react-native';
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
import SwitchTitleCard from './components/switchTitleCard/SwitchTitleCard';
import SwitchRowCard from './components/switchRowCard/SwitchRowCard';

const Card = ({
  item,
  index,
  metadata,
  maxRows,
  maxTitles,
  onPress,
  onChange,
  onCardLayout,
  onLongPress,
  isSelected,
}: CardProps) => {
  const [isPressable, setIsPressable] = useState<boolean>(false);
  const [shadowOpacity, setShadowOpacity] = useState<ViewStyle>({
    shadowOpacity: 0.1,
  });

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (onCardLayout) {
        const { y } = event.nativeEvent.layout;
        onCardLayout(index, y);
      }
    },
    [index, onCardLayout],
  );

  const onHoverIn = useCallback(() => {
    setShadowOpacity({ shadowOpacity: 0.2 });
  }, []);

  const onHoverOut = useCallback(() => {
    setShadowOpacity({ shadowOpacity: 0.1 });
  }, []);

  const onPressIn = useCallback(() => {
    setIsPressable(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressable(false);
  }, []);

  const isDisabled = useCallback((): boolean => {
    return item.isActive === false;
  }, [item.isActive]);

  const changeBackground = useCallback((): ViewStyle | undefined => {
    if (isDisabled() || isPressable) {
      return { backgroundColor: NEUTRAL_200 };
    }
    if (isSelected) {
      return { backgroundColor: TERTIARY_50 };
    }
    return { backgroundColor: styles.container.backgroundColor };
  }, [isDisabled, isPressable, isSelected]);

  const addBorderColor = useCallback((): ViewStyle => {
    if (!isSelected) {
      return {
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopWidth: 0,
      };
    }

    const borderColor = isDisabled()
      ? NEUTRAL_400
      : item?.color || TERTIARY_800;

    return {
      borderWidth: 2,
      borderColor,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderTopWidth: 0,
    };
  }, [isSelected, isDisabled, item?.color]);

  const changeStatusBackground = useCallback((): ViewStyle | undefined => {
    if (isDisabled()) {
      return { backgroundColor: NEUTRAL_400 };
    }
    if (item.color) {
      return { backgroundColor: item.color };
    }
    return { backgroundColor: TERTIARY_800 };
  }, [isDisabled, item.color]);

  const changeTextColor = useCallback((): TextStyle | {} => {
    if (isDisabled()) {
      return { color: NEUTRAL_500 };
    }
    return {};
  }, [isDisabled]);

  const { visibleRows, visibleTitles } = useMemo(() => {
    const visibleMetadata = metadata.filter(row => row.visible ?? true);

    const titleRows = visibleMetadata
      .filter(row => row.title === true)
      .slice(0, maxTitles);

    const titleKeys = titleRows.map(row => row.key);

    const dataRows = visibleMetadata
      .filter(row => !titleKeys.includes(row.key))
      .slice(0, maxRows);

    return { visibleTitles: titleRows, visibleRows: dataRows };
  }, [metadata, maxRows, maxTitles]);

  const handleCustomChange = useCallback(
    (key?: string, value?: any) => {
      if (onChange) {
        onChange(findPrimaryId(metadata, item), index, key, value);
      }
    },
    [onChange, metadata, item, index],
  );

  const handleLongPress = useCallback(() => {
    if (onLongPress && !isDisabled()) {
      onLongPress(findPrimaryId(metadata, item), index);
    }
  }, [onLongPress, isDisabled, metadata, item, index]);

  const handlePress = useCallback(() => {
    if (onPress && !isDisabled()) {
      onPress(findPrimaryId(metadata, item), index);
    }
  }, [onPress, isDisabled, metadata, item, index]);

  return (
    <Pressable
      onLayout={handleLayout}
      disabled={isDisabled()}
      onLongPress={handleLongPress}
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}>
      <View style={[styles.container, shadowOpacity, changeBackground()]}>
        <View style={[styles.status, changeStatusBackground()]} />
        <View style={addBorderColor()}>
          <View style={[styles.spacingCard]} />
          {visibleTitles.map((row, rowIndex) => (
            <SwitchTitleCard
              key={`title-${index}-${rowIndex}`}
              row={row}
              item={item}
              color={changeTextColor()}
              isDivisor={visibleTitles?.length - 1 === rowIndex}
              onChange={handleCustomChange}
              disabled={isDisabled()}
            />
          ))}
          {visibleRows.map((row, rowIndex) => (
            <SwitchRowCard
              key={`rowCard-${index}-${rowIndex}`}
              row={row}
              item={item}
              color={changeTextColor()}
              onChange={handleCustomChange}
              disabled={isDisabled()}
            />
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default memo(Card);
