import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';

const TableCellEdit = ({label}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      <img style={{width: 18}} src={'/assets/images/icons/edit.png'} />
    </View>
  );
};

export default TableCellEdit;
