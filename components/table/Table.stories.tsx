import React from 'react';
import {Story, Meta} from '@storybook/react';
import Table from './Table';
import {TableProps} from './Table.types';
import TableCellEdit from './components/TableCellEdit';
import {action} from '@storybook/addon-actions';
import data from './Table.json';

const meta: Meta = {
  title: 'Etendo/Tables',
  component: Table,
};

const Template: Story<TableProps> = args => <Table {...args} />;

export default meta;
export const table = Template.bind({});

table.args = {
  onRowPress(primary) {
    action('onRowPress')(primary);
  },
  tableHeight: 400,
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
      width: '20%',
      label: 'Description',
    },
    {
      key: '_id',
      visible: true,
      width: '20%',
      label: 'Edit',
      actions: [
        {
          component: <TableCellEdit label={'EDIT'} />,
          onAction: (id: string) => {
            action('onAction')(id);
          },
        },
      ],
    },
  ],
};
