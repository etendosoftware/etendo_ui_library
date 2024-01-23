import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from './components/button/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text style={[styles.sectionTitle]}>Etendo UI Library</Text>
      <Button typeStyle={'primary'} text="Button" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;