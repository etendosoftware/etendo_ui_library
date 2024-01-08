import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Table.styles';
import { ColumnsMetadata, TableHeaderProps } from '../Table.types';
import { SkeletonRowTable } from '../../secondaryComponents';
import { TERTIARY_80 } from '../../../styles/colors';

const TableHeaders = ({ title, columns, isLoading }: TableHeaderProps) => {
  return (
    <>
      {title && (
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
            {title}
          </Text>
        </View>
      )}
      <View style={styles.headerContainer}>
        {columns.map((item: ColumnsMetadata, colIndex: number) => {
          return isLoading ? (
            item.visible && (
              <View
                style={[styles.headerCell, { width: item.width }]}
                key={'HeaderTable' + colIndex}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={[styles.cellTextTitle]}>
                  {item.label}
                </Text>
              </View>
            )
          ) : (
            <SkeletonRowTable
              key={`${item.label}-${colIndex}`}
              width={item.width!}
              color={TERTIARY_80}
              indexRow={colIndex}
              indexColumn={colIndex}
              widthSkeleton={'40%'}
            />
          );
        })}
      </View>
    </>
  );
};

export default TableHeaders;
