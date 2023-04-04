import React from 'react';
import {View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';
import {EditIcon} from '../../../assets/images/icons/EditIcon';

const TableCellEdit = ({isWeb}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      <EditIcon style={{height: 18, width: 18}} />
    </View>
  );
};

export default TableCellEdit;
