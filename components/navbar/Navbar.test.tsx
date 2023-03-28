import React from 'react';
import renderer from 'react-test-renderer';
import {
  binocularIcon,
  chatIcon,
  etendoLogo,
  hamburgerIcon,
  slideShow,
  userNoBorder,
} from '../../assets/images/icons';

import {Navbar} from './Navbar';

const datasetNavbarH = [
  {
    routeImage: etendoLogo,
    routeNav: '',
    key: 'dataset0',
    name: 'FirstName LastName',
  },
  {
    routeImage: hamburgerIcon,
    routeNav: '',
    key: 'dataset1',
    name: 'FirstName LastName',
  },
  {
    routeImage: binocularIcon,
    routeNav: '',
    key: 'dataset2',
    name: 'FirstName LastName',
  },
  {
    routeImage: slideShow,
    routeNav: '',
    key: 'dataset3',
    name: 'FirstName LastName',
  },
  {
    routeImage: chatIcon,
    routeNav: '',
    key: 'dataset4',
    name: 'FirstName LastName',
  },
  {
    routeImage: userNoBorder,
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
