import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Table.styles';
import {removeLastBorderCell} from '../../../helpers/utilTable';
import {TableHeaderProps} from '../Table.types';

const TableHeaders = ({config}: TableHeaderProps) => {
  return (
    <View>
      {config.title && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{config.title}</Text>
        </View>
      )}
      <View style={styles.headerContainer}>
        {config.columns.map((item: any, colIndex: number) => {
          return (
            <View
              style={[
                styles.headerCell,
                {width: item.width, height: config.heightRow},
                removeLastBorderCell(colIndex, config.columns.length - 1),
              ]}
              key={'HeaderTable' + colIndex}>
              <Text ellipsizeMode="tail" style={[styles.cellTextTitle]}>
                {item.nameColumn}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default TableHeaders;
