import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './ChangeLogScreen.style';

const ChangeLogScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Change Log</Text>
      <Text style={styles.version}>1.0.4</Text>
      <Text style={styles.feature}>Features</Text>
      <Text style={styles.items}>● Add button</Text>
      <Text style={styles.items}>● Add dropdown</Text>
      <Text style={styles.items}>● Add input</Text>
      <Text style={styles.items}>● Add navbar</Text>
      <Text style={styles.items}>● Add pagination</Text>
      <Text style={styles.items}>● Add statusbar</Text>
      <Text style={styles.items}>● Add tab</Text>
      <Text style={styles.items}>● Add table</Text>
    </View>
  );
};

export default ChangeLogScreen;
