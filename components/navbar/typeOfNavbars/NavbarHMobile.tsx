/*  Navbar horizontal for mobile screen */

/* Imports */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {NavbarHorizontalProps} from '../Navbar.types';
import {NavbarHStyleVariant} from '../Navbar.styles';

export const NavbarHMobile = ({
  data,
  onChangeSelected,
}: NavbarHorizontalProps) => {
  return (
    <View style={NavbarHStyleVariant.mobile.container}>
      <TouchableOpacity onPress={() => onChangeSelected}>
      </TouchableOpacity>
    </View>
  );
};
