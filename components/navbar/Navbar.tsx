import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import {NavbarHMobile} from './typeOfNavbars/NavbarHMobile';
import {NavbarHTablet} from './typeOfNavbars/NavbarHTablet';
import {NavbarHDesktop} from './typeOfNavbars/NavbarHDesktop';
import {NavbarProps, NavbarScreenDimensions} from './Navbar.types';
import {NavbarV} from './typeOfNavbars/NavbarV';

export const Navbar = ({data, onChangeSelected, typeOfNavbar}: NavbarProps) => {
  const {width} = useWindowDimensions();

  if (typeOfNavbar === 'horizontal') {
    return (
      <ScrollView>
        {width < 480 && (
          <NavbarHMobile data={data} onChangeSelected={onChangeSelected} />
        )}

        {width >= 480 && width < 768 && (
          <NavbarHTablet data={data} onChangeSelected={onChangeSelected} />
        )}

        {width >= 768 && (
          <NavbarHDesktop data={data} onChangeSelected={onChangeSelected} />
        )}
      </ScrollView>
    );
  } else {
    return <NavbarV data={data} onChangeSelected={onChangeSelected} />;
  }
};
