import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Button from './components/button/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text>Etendo UI Library</Text>
      <Button typeStyle={'primary'} text="Button" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});

export default App;
