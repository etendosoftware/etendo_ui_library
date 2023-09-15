import React from 'react';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';
import { Actions, Columns, TableProps } from './Table.types';
import { styles } from './Table.styles';
import TableHeaders from './components/TableHeaders';
import { paintOddRows, removeHeaderBorder } from '../../helpers/table_utils';
import TableCell from './components/TableCell';

const Table = ({
  data,
  columns,
  title,
  onRowPress,
  tableHeight,
}: TableProps) => {
  const findPrimaryId = (col: Columns[], indexRow: number) => {
    let primary: string = '';
    if (indexRow >= 0) {
      for (const element of col) {
        if (element.primary === true) {
          if (element.key) {
            primary = data[indexRow][element.key];
            break;
          }
        }
      }
    }
    return primary;
  };
  const renderItem = (item: any, index: number) => {
    return (
      <Pressable
        onPress={() => {
          onRowPress(findPrimaryId(columns, index));
        }}
        style={[styles.row, paintOddRows(index)]}>
        {columns.map((col: Columns, colIndex: number) => {
          return (
            col.visible && (
              <View
                style={[styles.cell, col.cellStyle, { width: col.width }]}
                key={'movementTable' + colIndex}>
                {col.actions ? (
                  col.actions?.map((itemAction: Actions, index: number) => {
                    return (
                      <TouchableOpacity
                        style={styles.cellEditContainer}
                        onPress={() =>
                          itemAction.onAction(findPrimaryId(columns, index))
                        }
                        key={'tableCellCustom' + index}>
                        {itemAction.component}
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <TableCell
                    label={col.displayKey ? item[col.displayKey] : ''}
                    key={'tableCell' + index}
                  />
                )}
              </View>
            )
          );
        })}
      </Pressable>
    );
  };
  return (
    <>
      <View
        style={[
          styles.container,
          removeHeaderBorder(title),
          { height: tableHeight },
        ]}>
        <TableHeaders title={title} columns={columns} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={item => renderItem(item.item, item.index)}
          keyExtractor={(item: any, index: number) => 'Table: ' + index}
        />
      </View>
    </>
  );
};

export default Table;
