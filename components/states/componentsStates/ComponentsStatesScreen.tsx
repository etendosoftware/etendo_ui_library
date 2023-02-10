import {View, Text} from 'react-native';
import React from 'react';
import {Table} from '../../table';
import TableData from './TableComponentsStatesData.json';
import {styles} from './ComponentsStatesScreen.style';
import addMarginContainer from '../../../helpers/addMargin';

const ComponentsStatesScreen = () => {
  return (
    <View style={addMarginContainer()}>
      <Text style={styles.title}>Component state</Text>
      <Text style={styles.description}>
        Here you will find all our components and their states. They are updated
        automatically based on configuration of the component story.
      </Text>
      <Text style={styles.lenghtComponents}>
        Number of components: {TableData.length}
      </Text>
      <Table
        data={TableData}
        columns={[
          {
            displayKey: 'name',
            visible: true,
            key: 'name',
            width: '33.3%',
            label: 'Name',
          },
          {
            displayKey: 'category',
            visible: true,
            key: 'category',
            width: '33.3%',
            label: 'Category',
          },
          {
            displayKey: 'state',
            visible: true,
            key: 'state',
            width: '33.3%',
            label: 'State',
          },
        ]}
        onRowPress={() => {}}
      />
    </View>
  );
};

export default ComponentsStatesScreen;
