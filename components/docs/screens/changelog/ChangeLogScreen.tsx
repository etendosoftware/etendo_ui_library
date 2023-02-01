import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './ChangeLogScreen.style';

const ChangeLogScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Change Log</Text>
      <Text style={styles.version}>1.0.4</Text>
      <Text style={styles.feature}>Features</Text>
      <Text style={styles.items}>● add button</Text>
      <Text style={styles.items}>● add dropdown</Text>
      <Text style={styles.items}>● add input</Text>
      <Text style={styles.items}>● add navbar</Text>
      <Text style={styles.items}>● add pagination</Text>
      <Text style={styles.items}>● add statusbar</Text>
      <Text style={styles.items}>● add tab</Text>
      <Text style={styles.items}>● add table</Text>
    </View>
  );
};

export default ChangeLogScreen;
