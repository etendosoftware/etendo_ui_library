import React from 'react';
import {Image, Platform, Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';
import {editImage} from '../../../assets/images';

const TableCellEdit = ({label, image, isWeb}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      {isWeb ? (
        <img style={{width: 18}} src={image} />
      ) : (
        <Image source={editImage} style={{width: 18, height: 18}} />
      )}
    </View>
  );
};

export default TableCellEdit;
