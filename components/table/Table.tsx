import React from 'react';
import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {Actions, Columns, TableProps} from './Table.types';
import {styles} from './Table.styles';
import TableHeaders from './components/TableHeaders';
import {paintOddRows, removeHeaderBorder} from '../../helpers/utilTable';
import TableCell from './components/TableCell';

const Table = ({data, columns, title, heightRow, onRowPress}: TableProps) => {
  const findPrimaryId = (col: Columns[], indexRow: number) => {
    let primary: string = '';
    for (const element of col) {
      if (element.primary === true) {
        primary = data[indexRow][element.key];
        break;
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
        style={[styles.row, {height: heightRow}, paintOddRows(index)]}>
        {columns.map((col: Columns, colIndex: number) => {
          return (
            col.visible && (
              <View
                style={[styles.cell, {width: col.width}]}
                key={'movementTable' + colIndex}>
                {col.actions ? (
                  col.actions?.map((itemAction: Actions, index: number) => {
                    return (
                      <TouchableOpacity
                        onPress={() => itemAction.onAction(item[col.key])}
                        style={{flex: 1}}
                        key={'tableCellCustom' + index}>
                        {itemAction.component}
                      </TouchableOpacity>
                    );
                  })
                ) : (
                  <TableCell
                    label={item[col.displayKey]}
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
      <View style={[styles.container, removeHeaderBorder(title)]}>
        <TableHeaders title={title} heightRow={heightRow} columns={columns} />
        <FlatList
          data={data}
          renderItem={item => renderItem(item.item, item.index)}
          keyExtractor={(item: any, index: number) => 'Table: ' + index}
        />
      </View>
      {!data.length && (
        <View style={[styles.placeholderContainer, {height: heightRow}]}>
          <Text style={[styles.titleText]}>No hay resultados.</Text>
        </View>
      )}
    </>
  );
};

export default Table;
