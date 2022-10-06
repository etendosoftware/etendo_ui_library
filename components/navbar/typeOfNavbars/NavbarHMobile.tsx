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
      <TouchableOpacity
        onPress={() =>
          onChangeSelected({
            routeImage: require(''),
            routeNav: '',
            key: '',
            name: '',
          })
        }
      >
        <Image
          style={NavbarHStyleVariant.mobile.tinyLogoImage}
          source={data[0].routeImage}
        />
      </TouchableOpacity>

      <Image
        style={NavbarHStyleVariant.mobile.more}
        source={data[1].routeImage}
      />
    </View>
  );
};
