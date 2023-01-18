import React from 'react';
import {Image, View} from 'react-native';
import {styles} from '../Table.styles';
import {TableCellProps} from '../Table.types';
import {editIcon} from '../../../assets/images/icons';

const TableCellEdit = ({label, image, isWeb}: TableCellProps) => {
  return (
    <View style={styles.centerItem}>
      {isWeb ? (
        <img style={{width: 18}} src={editIcon} />
      ) : (
        <Image source={editIcon} style={{width: 18, height: 18}} />
      )}
    </View>
  );
};

export default TableCellEdit;
