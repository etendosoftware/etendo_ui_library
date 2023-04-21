import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {EditIcon} from '../../../assets/images/icons/EditIcon';

const TableCellEdit = () => {
  return (
    <View style={styles.centerItem}>
      <EditIcon style={{height: 12, width: 12, marginRight:5}} />
      <Text adjustsFontSizeToFit={true} style={styles.cellTextEdit}>
      EDIT
      </Text>
    </View>
  );
};

export default TableCellEdit;
