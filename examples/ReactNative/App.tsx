import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from './components/button/Button';
import {Input} from './components';
import {formatDate} from './components/datepicker/DatePicker.utils';

function App(): JSX.Element {
  const [dateValue, setDateValue] = useState<string | undefined>(undefined);

  return (
    <SafeAreaView>
      <Text style={[styles.sectionTitle]}>Etendo UI Library</Text>
      <Button typeStyle={'primary'} text="Button" />
      <View style={{width: '50%', marginTop: 20}}>
        <Input
          typeField="datePicker"
          language="en"
          value={dateValue}
          onChange={newDate => setDateValue(newDate)}
          formatDate={formatDate}
          timeZone="UTC"
        />
      </View>
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
