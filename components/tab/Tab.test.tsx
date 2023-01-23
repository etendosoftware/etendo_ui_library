import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

const dataset = [
  {name: 'Prods. of interest', route: '', key: 'prodsOfInterest'},
  {name: 'Assigned pop', route: '', key: 'Assigned pop'},
  {name: 'Incidents', route: '', key: 'incidents'},
  {name: 'Competition', route: '', key: 'competition'},
  {name: 'Questions', route: '', key: 'questions'},
  {name: 'Observations', route: '', key: 'observations'},
];

const onCheckSelectedMock = () => dataset[0];

describe('Running Test for Tab', () => {
  it('Check Tab Disabled', () => {
    const tree = renderer
      .create(
        <Tab
          data={dataset}
          onChangeSelected={onCheckSelectedMock}
          style="primary"
          typeSizeText="medium"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
