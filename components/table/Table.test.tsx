import React from 'react';
import renderer from 'react-test-renderer';
import TableCellEdit from './components/TableCellEdit';
import Table from './Table';

const onPress = (id:string) => {
  console.log(id)
}

describe('Running Test for Table', () => {
  it('Check Table Disabled', () => {
    const tree = renderer
      .create(
        <Table
          onRowPress={primary => {
            console.log(primary);
          }}
          heightRow={40}
          data={[
            {
              searchKey: '09123 ZEL',
              productName: 'Beer 200ml Cusqueña',
              description: '',
              expiration: '20/11/2023',
              lot: '00001',
              movementQuantity: 120,
              move: false,
            },
            {
              searchKey: '09124 ZEL',
              productName: 'Beer 200ml Cusqueña',
              description: '',
              expiration: '20/11/2023',
              lot: '00002',
              movementQuantity: 120,
              move: false,
            },
            {
              searchKey: '09123 ZEL',
              productName: 'Beer 200ml Cusqueña',
              description: '',
              expiration: '20/11/2023',
              lot: '00001',
              movementQuantity: 120,
              move: false,
            },
            {
              searchKey: '09124 ZEL',
              productName: 'Beer 200ml Cusqueña',
              description: '',
              expiration: '20/11/2023',
              lot: '00002',
              movementQuantity: 120,
              move: false,
            },
          ]}
          columns={[
            {
              primary: false,
              displayKey: 'movementQuantity',
              visible: true,
              key: 'quantity',
              width: '25%',
              label: 'Quantity',
            },
            {
              primary: false,
              displayKey: 'lot',
              visible: true,
              key: 'lot',
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
              displayKey: 'searchKey',
              visible: true,
              key: 'lot',
              width: '25%',
              label: 'Edit',
              actions: [
                {
                  component: <TableCellEdit label={'EDIT'} />,
                  onAction: onPress,
                },
              ],
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
