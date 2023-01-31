import React from 'react';
import renderer from 'react-test-renderer';
import TableCellEdit from './components/TableCellEdit';
import Table from './Table';

const onPress = (id: string) => {
  console.log(id);
};

describe('Running Test for Table', () => {
  it('Check Table Disabled', () => {
    const tree = renderer
      .create(
        <Table
          onRowPress={primary => {
            console.log(primary);
          }}
          data={[
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
          ]}
          columns={[
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
                    onPress(id);
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
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
