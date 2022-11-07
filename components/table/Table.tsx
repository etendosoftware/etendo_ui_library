import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {GREEN} from '../../styles/colors';
import {Input} from '../../components/input';
import {TableProps} from './Table.types';
import {styles} from './Table.styles';
import TableHeaders from './components/TableHeaders';
import {
  removeLastBorderCell,
  removeHeaderBorder,
  paintOddRows,
} from '../../helpers/utilTable';

const MovementTable = ({addedItems, config, passDataToParent}: TableProps) => {
  const getIcon = (check: boolean) => {
    if (check) {
      return (
        <Image
          style={{height: 14, width: 14}}
          source={require('../../assets/images/icons/checkTrue.png')}
        />
      );
    } else {
      return (
        <Image
          style={{height: 14, width: 14}}
          source={require('../../assets/images/icons/checkFalse.png')}
        />
      );
    }
  };

  const switchColumn = (col: any, item: any, index: number) => {
    if (col.type === 'cellText') {
      return (
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollCell}>
          <Text style={styles.cellText}>{item[col.key]}</Text>
        </ScrollView>
      );
    }
    if (col.type === 'cellOnlyRead') {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.centerItem}
          onPress={() => {
            passDataToParent({
              typeColumnPress: col.type,
              key: col.key,
              indexCurrent: index,
            });
          }}>
          <Image
            style={{height: 14, width: 11}}
            source={require('../../assets/images/icons/document.png')}
          />
        </TouchableOpacity>
      );
    }
    if (col.type === 'cellEdit') {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.centerItem}
          onPress={() => {
            passDataToParent({
              typeColumnPress: col.type,
              key: col.key,
              indexCurrent: index,
            });
          }}>
          <Image
            style={[
              {height: 13, width: 13},
              item[col.key] ? {tintColor: GREEN} : {},
            ]}
            source={require('../../assets/images/icons/edit.png')}
          />
        </TouchableOpacity>
      );
    }
    if (col.type === 'cellTextInput') {
      return (
        <Input
          centerText={true}
          value={item[col.key]}
          typeField={'textPressable'}
          onPress={() =>
            passDataToParent({
              typeColumnPress: col.type,
              key: col.key,
              indexCurrent: index,
            })
          }
        />
      );
    }
    if (col.type === 'cellCheck') {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.centerItem}
          onPress={() => {
            passDataToParent({
              typeColumnPress: col.type,
              key: col.key,
              indexCurrent: index,
            });
          }}>
          {(() => {
            getIcon(item[col.key]);
          })()}
        </TouchableOpacity>
      );
    }
  };

  const renderItem = (item: any, index: number, config: any) => {
    return (
      <View
        style={[styles.row, {height: config.heightRow}, paintOddRows(index)]}>
        {config.columns.map((col: any, colIndex: number) => {
          return (
            <View
              style={[
                styles.cell,
                {width: col.width},
                removeLastBorderCell(colIndex, config.columns.length - 1),
              ]}
              key={'movementTable' + colIndex}>
              {switchColumn(col, item, index)}
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <>
      <View style={[styles.container, removeHeaderBorder(config.title)]}>
        <TableHeaders config={config} />
        <FlatList
          data={addedItems}
          renderItem={item => renderItem(item.item, item.index, config)}
          keyExtractor={(item: any, index: number) => 'Table: ' + index}
        />
      </View>
      {!addedItems.length && (
        <View style={[styles.placeholderContainer, {height: config.heightRow}]}>
          <Text style={[styles.titleText]}>No hay resultados.</Text>
        </View>
      )}
    </>
  );
};

export default MovementTable;
