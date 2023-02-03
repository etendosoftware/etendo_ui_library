import React from 'react';
import {Story, Meta} from '@storybook/react';
import Table from './Table';
import {TableProps} from './Table.types';
import TableCellEdit from './components/TableCellEdit';
import {action} from '@storybook/addon-actions';
import data from './TableData.json';
import { Text, View } from 'react-native';
import { styles } from '../states/componentsStates/ComponentsStatesScreen.style';
import TableData from '../states/componentsStates/TableComponentsStatesData.json';
const meta: Meta = {
  title: 'Etendo/Tables',
  component: Table,
};

const Template: Story<TableProps> = args => <View>
  <Table  {...args}/>
</View>

export default meta;
export const TableDefault = Template.bind({});

TableDefault.args = {
  onRowPress: ()=>{},
  data: data,
  columns: [
    {
      primary: true,
      visible: false,
      key: '_id',
    },
    {
      displayKey: 'name',
      visible: true,
      key: 'name',
      width: '20%',
      label: 'Name',
    },
    {
      displayKey: 'email',
      visible: true,
      key: 'email',
      width: '20%',
      label: 'Email',
    },
    {
      displayKey: 'address',
      visible: true,
      key: 'address',
      width: '20%',
      label: 'Address',
    },
    {
      displayKey: 'about',
      visible: true,
      key: 'about',
      width: '40%',
      label: 'Description',
    }
  ],
};
