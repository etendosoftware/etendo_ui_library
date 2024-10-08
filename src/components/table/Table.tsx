import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { ColumnsMetadata, TableProps } from './Table.types';
import { styles } from './Table.styles';
import TableHeaders from './components/TableHeaders';
import TableCell from './components/TableCell';
import {
  findPrimaryId,
  paintOddRows,
  removeHeaderBorder,
} from '../../helpers/table_utils';
import { SkeletonRowTable } from '../secondaryComponents';
import { NEUTRAL_300 } from '../../styles/colors';
import TableEmpty from './components/TableEmpty';
import { GridContainer } from '../containers/gridContainer';

const Table = ({
  data = [],
  columns,
  title,
  onRowPress,
  tableHeight,
  isLoading,
  textEmptyTable,
  commentEmptyTable,
  onLoadMoreData,
  isLoadingMoreData = true,
  pageSize = 3,
  currentPage = 0,
  style,
}: TableProps) => {
  const handleLoadMore = () => {
    if (isLoadingMoreData && !isLoading && onLoadMoreData) {
      onLoadMoreData(currentPage + 1, pageSize);
    }
  };

  const RenderItem = (item: any, index: number) => {
    return (
      <Pressable
        onPress={() => {
          if (onRowPress) {
            onRowPress(findPrimaryId(columns, item));
          }
        }}
        style={[styles.row, paintOddRows(index)]}>
        {columns.map((col: ColumnsMetadata, colIndex: number) => {
          let components: React.ReactNode[] = [];
          if (col.components) {
            const updatedComponents = col.components!.map((component: any) => {
              return React.cloneElement(component, {
                metadata: item,
              });
            });
            components = updatedComponents;
          }
          return (
            col.visible && (
              <View
                style={[styles.cell, col.cellStyle, { width: col.width }]}
                key={'movementTable' + colIndex}>
                {col.components ? (
                  <GridContainer components={components} />
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

  const RenderSkeleton = (index: number) => {
    return (
      <View style={[styles.row, paintOddRows(index)]}>
        {columns.map((col: ColumnsMetadata, colIndex: number) => {
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

  return (
    <View style={[style]}>
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
            isLoadingMoreData && isLoading && !data.length && onLoadMoreData
              ? RenderSkeleton(item.index)
              : RenderItem(item.item, item.index)
          }
          ListEmptyComponent={
            <TableEmpty
              commentEmptyTable={commentEmptyTable}
              textEmptyTable={textEmptyTable}
            />
          }
          keyExtractor={(_item: any, index: number) => 'Table: ' + index}
          ListFooterComponent={() =>
            isLoadingMoreData &&
            onLoadMoreData &&
            isLoading &&
            Boolean(data.length) &&
            RenderSkeleton(data.length)
          }
          onEndReached={() => handleLoadMore()}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
};

export default Table;
