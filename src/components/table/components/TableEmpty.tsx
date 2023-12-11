import { View, Text } from 'react-native';
import React from 'react';
import EmptyTableState from '../../../assets/images/components/EmptyTableState';
import { styles } from '../Table.styles';

interface TableEmptyProps {
  textEmptyTable?: string;
  commentEmptyTable?: string;
}

const TableEmpty = ({ textEmptyTable, commentEmptyTable }: TableEmptyProps) => {
  return (
    <View style={styles.emptyStateConteiner}>
      <EmptyTableState />
      <Text style={styles.emptyTextTitle}>{textEmptyTable}</Text>
      <Text style={styles.emptyTextSubtitle}>{commentEmptyTable}</Text>
    </View>
  );
};

export default TableEmpty;
