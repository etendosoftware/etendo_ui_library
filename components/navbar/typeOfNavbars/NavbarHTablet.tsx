/*  Navbar horizontal for tablet screen */

/* Imports */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Info, NavbarHorizontalProps} from '../Navbar.types';
import {NavbarHStyleVariant} from '../Navbar.styles';

export const NavbarHTablet = ({
  data,
  onChangeSelected,
}: NavbarHorizontalProps) => {
  return (
    <View style={NavbarHStyleVariant.tablet.container}>
      <TouchableOpacity onPress={() => onChangeSelected}>
      </TouchableOpacity>
      <View style={NavbarHStyleVariant.tablet.containerImages}>
        {data.map((image: Info, i: number) => {
          if (i >= 2) {
            return (
              <TouchableOpacity
                onPress={() => onChangeSelected}
                key={image.key}>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
};
