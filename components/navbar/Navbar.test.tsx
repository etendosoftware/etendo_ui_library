import React from 'react';
import renderer from 'react-test-renderer';

import {Navbar} from './Navbar';

const datasetNavbarH = [
  {
    routeImage: require('../../assets/images/etendo-erp.png'),
    routeNav: '',
    key: 'dataset0',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/hamburger.svg'),
    routeNav: '',
    key: 'dataset1',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/binoculars.svg'),
    routeNav: '',
    key: 'dataset2',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/slideShow.svg'),
    routeNav: '',
    key: 'dataset3',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/chat.svg'),
    routeNav: '',
    key: 'dataset4',
    name: 'FirstName LastName',
  },
  {
    routeImage: require('../../assets/images/icons/user-no-border.svg'),
    routeNav: '',
    key: 'dataset5',
    name: 'FirstName LastName',
  },
];

const onCheckSelectedMock = () => datasetNavbarH[0];

describe('Running Test for Navbar', () => {
  it('Check Navbar Disabled', () => {
    const tree = renderer
      .create(
        <Navbar
          data={datasetNavbarH}
          onChangeSelected={onCheckSelectedMock}
          typeOfNavbar="horizontal"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
