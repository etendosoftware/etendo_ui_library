import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';

const TableCellEdit = ({label, image}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      <img style={{width: 18}} src={image} />
    </View>
  );
};

export default TableCellEdit;
