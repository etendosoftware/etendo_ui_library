import React from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions, Columns, TableProps } from './Table.types';
import { styles } from './Table.styles';
import TableHeaders from './components/TableHeaders';
import TableCell from './components/TableCell';
import { paintOddRows, removeHeaderBorder } from '../../helpers/table_utils';
import { SkeletonRowTable } from '../secondaryComponents';
import { NEUTRAL_300 } from '../../styles/colors';
import EmptyTableState from '../../assets/images/components/EmptyTableState';

const Table = ({
  data,
  columns,
  title,
  onRowPress,
  tableHeight,
  isLoading,
  textEmptyTable,
  commentEmptyTable,
  loadMoreData,
  isLoadMoreData = true,
  pageSize = 20,
  currentPage = 0,
  isLoadingMoreData = true,
}: TableProps) => {
  const handleLoadMore = () => {
    if (isLoadingMoreData && isLoadMoreData && !isLoading && loadMoreData) {
      loadMoreData(currentPage + 1, pageSize);
    }
  };

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
          if (onRowPress) {
            onRowPress(findPrimaryId(columns, index));
          }
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
      <View style={[styles.row, paintOddRows(index)]}>
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
      </View>
    );
  };

  const EmptyState = () => {
    return (
      <View style={styles.emptyStateConteiner}>
        <EmptyTableState />
        <View>
          <Text style={styles.emptyTextTitle}>{textEmptyTable}</Text>
          <Text style={styles.emptyTextSubtitle}>{commentEmptyTable}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        removeHeaderBorder(title),
        { height: tableHeight },
      ]}>
      <TableHeaders
        title={title}
        columns={columns}
        isLoading={!(isLoading && !data.length)}
      />

      <FlatList
        data={
          isLoadingMoreData && isLoading && !data.length
            ? Array(pageSize).fill({})
            : data
        }
        renderItem={item =>
          isLoadingMoreData && isLoading && !data.length && loadMoreData
            ? RenderSkeleton(item.item, item.index)
            : RenderItem(item.item, item.index)
        }
        ListEmptyComponent={<EmptyState />}
        keyExtractor={(_item: any, index: number) => 'Table: ' + index}
        ListFooterComponent={() =>
          isLoadingMoreData &&
          loadMoreData &&
          isLoadMoreData &&
          isLoading &&
          Boolean(data.length) &&
          RenderSkeleton(null, data.length)
        }
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

export default Table;
