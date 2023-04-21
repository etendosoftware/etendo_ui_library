import React from 'react';
import {Text} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';

const TableCell = ({label}: TableCellProps) => {
  return (
    <Text style={styles.cellText}>
      {label}
    </Text>
  );
};

export default TableCell;
