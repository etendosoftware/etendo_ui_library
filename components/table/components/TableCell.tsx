import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';

const TableCell = ({label}: TableCellProps) => {
  return (
    <ScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={styles.scrollCell}>
      <Text style={styles.cellText}>{label}</Text>
    </ScrollView>
  );
};

export default TableCell;
