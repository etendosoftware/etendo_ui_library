import {View} from 'react-native';
import React from 'react';
import SkeletonItem from '../../../secondaryComponents/SkeletonItem';
import {CardVariant, styles} from '../CardDropdown.styles';
import {CardDropdownStyleType} from '../CardDropdown.types';

export interface CardDropdownSkeletonProps {
  disabled?: boolean;
  styleType: CardDropdownStyleType;
}

const CardSkeleton = ({
  styleType,
  disabled = false,
}: CardDropdownSkeletonProps) => {
  const getStyle = () => {
    if (disabled) {
      if (styleType === 'primary') {
        return CardVariant['disabledPrimary'];
      }
      if (styleType === 'secondary') {
        return CardVariant['disabledSecondary'];
      }
    }
    return CardVariant[styleType];
  };

  return (
    <>
      <View style={[styles.cardContainer, getStyle().colorCardContainer]}>
        <SkeletonItem
          color={getStyle().colorCardOptionSkeletonItem}
          height={68}
          width={68}
          borderRadius={50}
          delay={0}
        />
        <SkeletonItem
          color={getStyle().colorCardOptionSkeletonItem}
          height={28}
          width={224}
          borderRadius={50}
          delay={0}
        />
      </View>
    </>
  );
};

export default CardSkeleton;
