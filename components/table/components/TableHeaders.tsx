import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {Columns, TableHeaderProps} from '../Table.types';

const TableHeaders = ({title, columns}: TableHeaderProps) => {
  return (
    <>
      {title && (
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>{title}</Text>
        </View>
      )}
      <View style={[styles.headerContainer]}>
        {columns.map((item: Columns, colIndex: number) => {
          return (
            item.visible && (
              <View
                style={[styles.headerCell, {width: item.width}]}
                key={'HeaderTable' + colIndex}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.cellTextTitle]}>
                  {item.label}
                </Text>
              </View>
            )
          );
        })}
      </View>
    </>
  );
};

export default TableHeaders;
