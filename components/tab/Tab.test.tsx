import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';

const datasetTab = [
  {name: 'Home', route: '/home', key: 'user'},
  {name: 'About', route: '/about', key: 'vehicles'},
  {name: 'Staff', route: '/staff', key: 'staff'},
  {name: 'Login', route: '/login', key: 'skills'},
  {name: 'Logout', route: '/logout', key: 'movilApp'},
];

describe('Running Test for Tab', () => {
  it('Check Tab Disabled', () => {
    const tree = renderer
      .create(
        <Tab
          data={datasetTab}
          selectedTab={1}
          setSelectedTab={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
