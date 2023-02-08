/* Imports */
import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import {NavbarHDesktop} from './typeOfNavbars/NavbarHDesktop';
import {NavbarProps} from './Navbar.types';
import {NavbarV} from './typeOfNavbars/NavbarV';

export const Navbar = ({data, onChangeSelected, typeOfNavbar}: NavbarProps) => {
  // This constant allows to know the size of the user's screen width
  const {width} = useWindowDimensions();

  // The following conditional allows to know the type of navigation chosen by the programmer

  // NavbarHorizontal
  if (typeOfNavbar === 'horizontal') {
    return (
      <ScrollView>
        {width >= 768 && (
          <NavbarHDesktop data={data} onChangeSelected={onChangeSelected} />
        )}
      </ScrollView>
    );
    // NavbarVertical
  } else {
    return <NavbarV data={data} onChangeSelected={onChangeSelected} />;
  }
};
