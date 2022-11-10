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
          ]}
          columns={[
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
