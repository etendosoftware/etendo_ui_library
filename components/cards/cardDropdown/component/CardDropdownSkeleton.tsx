import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import SkeletonItem from '../../../secondaryComponents/SkeletonItem';
import {CardVariant, styles} from '../CardDropdown.styles';
import {CardDropdownSkeletonProps} from '../CardDropdown.types';

const CardDropdownSkeleton = ({
  onClose,
  styleType,
}: CardDropdownSkeletonProps) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.cardOptionHeader,
          CardVariant[styleType].colorCardOptionHeader,
        ]}
        activeOpacity={0.7}
        onPress={onClose}
      >
        <View style={styles.cardOptionHeaderSkeletonLeftContainer}>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonHeaderItem}
            height={20}
            width={20}
            borderRadius={50}
            delay={0}
          />
          <View style={styles.cardOptionSkeletonRightContainer} />
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonHeaderItem}
            height={22}
            width={137}
            borderRadius={50}
            delay={0}
          />
        </View>
      </TouchableOpacity>
      <View
        style={[
          styles.cardOptionSkeletonContainer,
          CardVariant[styleType].colorCardOptionSkeletonContainer,
        ]}
      >
        <SkeletonItem
          color={CardVariant[styleType].colorCardOptionSkeletonItem}
          height={46}
          width={46}
          borderRadius={50}
          delay={200}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={60}
            borderRadius={50}
            delay={200}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={200}
          />
        </View>
      </View>
      <View
        style={[
          styles.cardOptionSkeletonContainer,
          CardVariant[styleType].colorCardOptionSkeletonContainer,
        ]}
      >
        <SkeletonItem
          color={CardVariant[styleType].colorCardOptionSkeletonItem}
          height={46}
          width={46}
          borderRadius={50}
          delay={400}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={60}
            borderRadius={50}
            delay={400}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={400}
          />
        </View>
      </View>
      <View
        style={[
          styles.cardOptionSkeletonContainer,
          CardVariant[styleType].colorCardOptionSkeletonContainer,
        ]}
      >
        <SkeletonItem
          color={CardVariant[styleType].colorCardOptionSkeletonItem}
          height={46}
          width={46}
          borderRadius={50}
          delay={600}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={60}
            borderRadius={50}
            delay={600}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={600}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={600}
          />
        </View>
      </View>
      <View
        style={[
          styles.cardOptionSkeletonContainer,
          CardVariant[styleType].colorCardOptionSkeletonContainer,
        ]}
      >
        <SkeletonItem
          color={CardVariant[styleType].colorCardOptionSkeletonItem}
          height={46}
          width={46}
          borderRadius={50}
          delay={800}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={60}
            borderRadius={50}
            delay={800}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={800}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={CardVariant[styleType].colorCardOptionSkeletonItem}
            height={20}
            width={156}
            borderRadius={50}
            delay={800}
          />
        </View>
      </View>
    </>
  );
};

export default CardDropdownSkeleton;
