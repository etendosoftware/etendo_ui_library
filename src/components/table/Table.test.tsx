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
              visible: true,
              key: 'name',
              width: '20%',
              label: 'Name',
            },
            {
              visible: true,
              key: 'email',
              width: '20%',
              label: 'Email',
            },
            {
              visible: true,
              key: 'address',
              width: '20%',
              label: 'Address',
            },
            {
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
