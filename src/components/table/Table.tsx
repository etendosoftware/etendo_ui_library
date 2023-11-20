import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions, Columns, TableProps } from './Table.types';
import { styles } from './Table.styles';
import TableHeaders from './components/TableHeaders';
import TableCell from './components/TableCell';
import {
  isDeviceTablet,
  paintOddRows,
  removeHeaderBorder,
} from '../../helpers/table_utils';
import { SkeletonRowTable } from '../secondaryComponents';
import { NEUTRAL_300 } from '../../styles/colors';

const Table = ({
  data,
  columns,
  title,
  onRowPress,
  tableHeight,
  isLoading,
  pageSize,
  textEmptyTable,
  commentEmptyTable,
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

  const RenderItem = (item: any, index: number) => {
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

  const RenderSkeleton = (item: any, index: number) => {
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

  const EmptyState = () => {
    const image = require('../../assets/images/components/empty-state-table.png');
    return (
      <View style={styles.emptyStateConteiner}>
        <Image
          style={
            isDeviceTablet
              ? { width: '50%', height: '70%' }
              : { width: '100%', height: '50%' }
          }
          source={image}
          resizeMode="stretch"
        />
        <Text style={styles.emptyTextTitle}>{textEmptyTable}</Text>
        <Text style={styles.emptyTextSubtitle}>{commentEmptyTable}</Text>
      </View>
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
          data={!isLoading ? data : Array(pageSize).fill({})}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={item =>
            isLoading
              ? RenderSkeleton(item.item, item.index)
              : RenderItem(item.item, item.index)
          }
          ListEmptyComponent={EmptyState}
          keyExtractor={(_item: any, index: number) => 'Table: ' + index}
        />
      </View>
    </>
  );
};

export default Table;
