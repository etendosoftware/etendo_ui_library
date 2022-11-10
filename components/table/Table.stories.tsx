import React from 'react';
import {Story, Meta} from '@storybook/react';
import Table from './Table';
import {TableProps} from './Table.types';
import TableCellEdit from './components/TableCellEdit';

const meta: Meta = {
  title: 'Etendo/Tables',
  component: Table,
  argTypes: {},
};

const Template: Story<TableProps> = args => <Table {...args} />;

export default meta;
export const table = Template.bind({});

table.args = {
  onRowPress: primary => {
    console.log(primary);
  },
  heightRow: 40,
  data: [
    {
      searchKey: '09123 ZEL',
      productName: 'Cerveza 200ml Cusqueña',
      description: '',
      caducidad: '20/11/2023',
      lote: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09124 ZEL',
      productName: 'Cerveza 200ml Cusqueña',
      description: '',
      caducidad: '20/11/2023',
      lote: '00002',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Cerveza 200ml Cusqueña',
      description: '',
      caducidad: '20/11/2023',
      lote: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09124 ZEL',
      productName: 'Cerveza 200ml Cusqueña',
      description: '',
      caducidad: '20/11/2023',
      lote: '00002',
      movementQuantity: 120,
      move: false,
    },
  ],
  columns: [
    {
      primary: false,
      displayKey: 'movementQuantity',
      visible: true,
      key: 'productName',
      width: '25%',
      label: 'Cantidad',
    },
    {
      primary: false,
      displayKey: 'lote',
      visible: true,
      key: 'productName',
      width: '25%',
      label: 'Lote',
    },
    {
      primary: false,
      displayKey: 'searchKey',
      visible: true,
      key: 'productName',
      width: '25%',
      label: 'Codigo',
    },
    {
      primary: false,
      displayKey: 'searchKey',
      visible: true,
      key: 'lote',
      width: '25%',
      label: 'Editar',
      actions: [
        {
          component: <TableCellEdit label={'EDITAR'} />,
          onAction: id => {
            console.log(id);
          },
        },
      ],
    },
    {
      primary: true,
      displayKey: 'searchKey',
      visible: false,
      key: 'productName',
      width: '25%',
      label: 'Codigo',
    },
  ],
};
