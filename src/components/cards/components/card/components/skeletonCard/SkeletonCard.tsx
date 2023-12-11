import { DimensionValue, View } from 'react-native';
import React from 'react';
import { SkeletonItem } from '../../../../../secondaryComponents';
import { styles } from './SkeletonCard.style';
import { NEUTRAL_200 } from '../../../../../../styles/colors';

const createSkeletonItem = (width: DimensionValue, delay: number) => (
  <View style={styles.skeletonItem}>
    <SkeletonItem
      width={width}
      height={20}
      borderRadius={50}
      color={NEUTRAL_200}
      delay={delay}
    />
  </View>
);

const SkeletonCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <SkeletonItem width={'100%'} height={8} color={NEUTRAL_200} delay={0} />
      </View>
      {createSkeletonItem('25%', 100)}
      {createSkeletonItem('50%', 200)}
      {createSkeletonItem('100%', 300)}
      {createSkeletonItem('100%', 400)}
    </View>
  );
};

export default SkeletonCard;
