import React from 'react';
import renderer from 'react-test-renderer';
import Table from './Table';
import data from './TableData.json';

describe('Running Test for Tab', () => {
  it('Check Tab Disabled', () => {
    const tree = renderer
      .create(
        <Table
          onRowPress={() => {}}
          data={data}
          columns={[
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
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
