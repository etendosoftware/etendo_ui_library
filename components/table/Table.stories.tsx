import React from 'react';
import {Story, Meta} from '@storybook/react';
import Table from './Table';
import {TableProps} from './Table.types';

const meta: Meta = {
  title: 'Etendo/Tables',
  component: Table,
  argTypes: {},
};

const Template: Story<TableProps> = args => <Table {...args} />;

export default meta;
export const table = Template.bind({});

table.args = {
  addedItems: [
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
  config: {
    heightRow: 35,
    columns: [
      {
        type: 'cellText',
        nameColumn: 'Código',
        key: 'searchKey',
        width: '12.5%',
      },
      {
        type: 'cellText',
        nameColumn: 'Nombre',
        key: 'productName',
        width: '12.5%',
      },
      {
        type: 'cellEdit',
        nameColumn: 'Descripción',
        key: 'description',
        width: '12.5%',
      },
      {
        type: 'cellText',
        nameColumn: 'F. Caducidad',
        key: 'caducidad',
        width: '12.5%',
      },
      {
        type: 'cellText',
        nameColumn: 'Lote',
        key: 'lote',
        width: '12.5%',
      },
      {
        type: 'cellText',
        nameColumn: 'Cantidad',
        key: 'movementQuantity',
        width: '12.5%',
      },
      {
        type: 'cellCheck',
        nameColumn: 'Mover',
        key: 'move',
        width: '12.5%',
      },
      {
        type: 'cellOnlyRead',
        nameColumn: 'Ver',
        key: '',
        width: '12.5%',
      },
    ],
  },
};
