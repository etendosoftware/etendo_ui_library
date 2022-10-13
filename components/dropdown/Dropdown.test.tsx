import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

const dataset = [
  {name: 'User', route: '', key: 'user'},
  {name: 'Vehicles', route: '', key: 'vehicles'},
  {name: 'Skills', route: '', key: 'skills'},
  {name: 'Mobile app', route: '', key: 'movilApp'},
  {name: 'Staff', route: '', key: 'staff'},
  {name: 'Routing options', route: '', key: 'routing options'},
  {name: 'Map', route: '', key: 'map'},
];

const onCheckSelectedMock = () => dataset[0];

describe('Running Test for Tab', () => {
  it('Check Tab Disabled', () => {
    const tree = renderer
      .create(
        <Dropdown
          data={dataset}
          onChangeSelected={onCheckSelectedMock}
          text="Massive load"
          style="primary"
          typeSizeText="medium"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
