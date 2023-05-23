import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './ChangeLogScreen.style';
import addMarginContainer from '../../../../helpers/addMargin';

const ChangeLogScreen = () => {
  return (
    <View style={addMarginContainer()}>
      <Text style={styles.title}>Change Log</Text>
      <Text style={styles.version}>1.1.0</Text>
      <Text style={styles.feature}>Features</Text>
      <Text style={styles.items}>● Add Button component.</Text>
      <Text style={styles.items}>● Add CardDropdown component.</Text>
      <Text style={styles.items}>● Add Input component.</Text>
      <Text style={styles.items}>● Add Navbar component.</Text>
      <Text style={styles.items}>● Add Pagination component.</Text>
      <Text style={styles.items}>● Add Statusbar component.</Text>
      <Text style={styles.items}>● Add Tab component.</Text>
      <Text style={styles.items}>● Add Table component.</Text>
    </View>
  );
};

export default ChangeLogScreen;
