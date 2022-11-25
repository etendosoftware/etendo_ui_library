import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';

const TableCellEdit = ({label}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      <img
        style={{height: 13, width: 13, marginRight: 5}}
        src={'/assets/images/icons/edit.png'}
      />
      <Text style={styles.cellTextEdit}>{label}</Text>
    </View>
  );
};

export default TableCellEdit;
