import React from 'react';
import renderer from 'react-test-renderer';
import {etendoLogo} from '../../assets/images/etendo-erp.png';
import {Binoculars} from '../../assets/images/icons/Binoculars';
import {ChatIcon} from '../../assets/images/icons/ChatIcon';
import {HamburgerIcon} from '../../assets/images/icons/HamburgerIcon';
import {SlideShow} from '../../assets/images/icons/SlideShow';
import {UserNoBorder} from '../../assets/images/icons/UserNoBorder';

import {Navbar} from './Navbar';

const datasetNavbarH = [
  {
    routeImage: etendoLogo,
    routeNav: '',
    key: 'dataset0',
    name: 'FirstName LastName',
  },
  {
    routeImage: <HamburgerIcon />,
    routeNav: '',
    key: 'dataset1',
    name: 'FirstName LastName',
  },
  {
    routeImage: <Binoculars />,
    routeNav: '',
    key: 'dataset2',
    name: 'FirstName LastName',
  },
  {
    routeImage: <SlideShow />,
    routeNav: '',
    key: 'dataset3',
    name: 'FirstName LastName',
  },
  {
    routeImage: <ChatIcon />,
    routeNav: '',
    key: 'dataset4',
    name: 'FirstName LastName',
  },
  {
    routeImage: <UserNoBorder />,
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
