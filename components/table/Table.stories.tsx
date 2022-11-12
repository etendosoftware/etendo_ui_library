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
  data: [
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description: 'Deserunt tempor anim Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description: 'Deserun.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
    {
      searchKey: '09123 ZEL',
      productName: 'Fernet Branca 750cc Full. Quirino Bebidas',
      description:
        'Deserunt tempor anim commodo occaecat consectetur velit nostrud ea laborum fugiat ipsum aliquip. Elit irure esse dolor in sit.',
      expiration: '20/11/2023',
      lot: '00001',
      movementQuantity: 120,
      move: false,
    },
  ],
  columns: [
    {
      primary: false,
      displayKey: 'movementQuantity',
      visible: true,
      key: 'movementQuantity',
      width: '25%',
      label: 'Quantity',
    },
    {
      primary: false,
      displayKey: 'description',
      visible: true,
      key: 'description',
      width: '25%',
      label: 'Lot',
    },
    {
      primary: false,
      displayKey: 'searchKey',
      visible: true,
      key: 'searchKey',
      width: '25%',
      label: 'Code',
    },
    {
      primary: false,
      displayKey: 'lot',
      visible: true,
      key: 'lot',
      width: '25%',
      label: 'Edit',
      actions: [
        {
          component: <TableCellEdit label={'EDIT'} />,
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
      label: 'Code',
    },
  ],
};
