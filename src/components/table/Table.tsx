import React from 'react';
import { FlatList, Pressable, TouchableOpacity, View } from 'react-native';
import { Actions, Columns, TableProps } from './Table.types';
import { styles } from './Table.styles';
import TableHeaders from './components/TableHeaders';
import { paintOddRows, removeHeaderBorder } from '../../helpers/table_utils';
import TableCell from './components/TableCell';
import { SkeletonRowTable } from '../secondaryComponents';
import { NEUTRAL_300 } from '../../styles/colors';

const Table = ({
  data,
  columns,
  title,
  onRowPress,
  tableHeight,
  isLoading = true,
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
                {col.components ? (
                  col.components?.map(
                    (itemAction: Actions, actionIndex: number) => {
                      return (
                        <TouchableOpacity
                          style={styles.cellEditContainer}
                          onPress={() =>
                            itemAction.onAction(findPrimaryId(columns, index))
                          }
                          key={'tableCellCustom' + actionIndex}>
                          {itemAction.component}
                        </TouchableOpacity>
                      );
                    },
                  )
                ) : (
                  <TableCell
                    label={col.key ? item[col.key] : ''}
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

  const renderSkeleton = (item: any, index: number) => {
    return (
      <Pressable
        onPress={() => {
          onRowPress(findPrimaryId(columns, index));
        }}
        style={[styles.row, paintOddRows(index)]}>
        {columns.map((col: Columns, colIndex: number) => {
          return (
            col.visible && (
              <SkeletonRowTable
                key={colIndex}
                width={col.width!}
                color={NEUTRAL_300}
                indexRow={index}
                indexColumn={colIndex}
              />
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
        <TableHeaders title={title} columns={columns} isLoading={!isLoading} />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={item =>
            !isLoading
              ? renderItem(item.item, item.index)
              : renderSkeleton(item.item, item.index)
          }
          keyExtractor={(item: any, index: number) => 'Table: ' + index}
        />
      </View>
    </>
  );
};

export default Table;
