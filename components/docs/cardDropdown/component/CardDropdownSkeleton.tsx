import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SkeletonItem from '../../../secondaryComponents/SkeletonItem';
import {CardVariant, styles} from '../CardDropdown.styles';

const CardDropdownSkeleton = ({onClose}: any) => {
  return (
    <>
      <TouchableOpacity
        style={styles.cardOptionHeader}
        activeOpacity={0.7}
        onPress={onClose}
      >
        <View style={styles.cardOptionHeaderSkeletonLeftContainer}>
            <SkeletonItem
            color={'#303775'}
            height={20}
            width={20}
            borderRadius={50}
            delay={0}
            />
            <View style={styles.cardOptionSkeletonRightContainer} />
            <SkeletonItem
            color={'#303775'}
            height={22}
            width={137}
            borderRadius={50}
            delay={0}
            />
        </View>
        <Image
          style={styles.cardOptionHeaderUp}
          source={require('../../../../assets/images/icons/up.png')}
        />
      </TouchableOpacity>
      <View style={[styles.cardOptionSkeletonContainer,CardVariant['primary'].colorCardOptionSkeletonContainer]}>
        <SkeletonItem
          color={'rgba(0,0,0,0.12)'}
          height={46}
          width={46}
          borderRadius={50}
          delay={200}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={60}
            borderRadius={50}
            delay={200}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={156}
            borderRadius={50}
            delay={200}
          />
        </View>
      </View>
      <View style={[styles.cardOptionSkeletonContainer,CardVariant['primary'].colorCardOptionSkeletonContainer]}>
        <SkeletonItem
          color={'rgba(0,0,0,0.12)'}
          height={46}
          width={46}
          borderRadius={50}
          delay={400}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={60}
            borderRadius={50}
            delay={400}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={156}
            borderRadius={50}
            delay={400}
          />
        </View>
      </View>
      <View style={[styles.cardOptionSkeletonContainer,CardVariant['primary'].colorCardOptionSkeletonContainer]}>
        <SkeletonItem
          color={'rgba(0,0,0,0.12)'}
          height={46}
          width={46}
          borderRadius={50}
          delay={600}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={60}
            borderRadius={50}
            delay={600}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={156}
            borderRadius={50}
            delay={600}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={156}
            borderRadius={50}
            delay={600}
          />
        </View>
      </View>
      <View style={[styles.cardOptionSkeletonContainer,CardVariant['primary'].colorCardOptionSkeletonContainer]}>
        <SkeletonItem
          color={'rgba(0,0,0,0.12)'}
          height={46}
          width={46}
          borderRadius={50}
          delay={800}
        />
        <View style={styles.cardOptionSkeletonRightContainer}>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={60}
            borderRadius={50}
            delay={800}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
            height={20}
            width={156}
            borderRadius={50}
            delay={800}
          />
          <View style={styles.cardOptionSeparation}></View>
          <SkeletonItem
            color={'rgba(0,0,0,0.12)'}
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
