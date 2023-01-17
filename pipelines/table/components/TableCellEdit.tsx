import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';
import {editImage} from '../../../assets/images';

const TableCellEdit = ({label}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      <Image style={styles.imgEdit} source={editImage} />
      <Text style={styles.cellTextEdit}>{label}</Text>
    </View>
  );
};

export default TableCellEdit;
