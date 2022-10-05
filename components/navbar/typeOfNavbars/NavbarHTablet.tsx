import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Info, NavbarHorizontalProps, NavbarProps} from '../Navbar.types';
import {NavbarHStyleVariant} from '../Navbar.styles';

export const NavbarHTablet = ({
  data,
  onChangeSelected,
}: NavbarHorizontalProps) => {
  return (
    <View style={NavbarHStyleVariant.tablet.container}>
      <TouchableOpacity
        onPress={() => {
          /* Allows to detect the selected item */
          onChangeSelected = onChangeSelected;
        }}
      >
        <Image
          style={NavbarHStyleVariant.tablet.tinyLogo}
          source={data[0].routeImage}
        />
      </TouchableOpacity>

      <View style={NavbarHStyleVariant.tablet.containerImages}>
        {data.map((image: Info, i: number) => {
          if (i >= 2) {
            return (
              <TouchableOpacity onPress={() => onChangeSelected}>
                <Image
                  style={NavbarHStyleVariant.tablet.navIcons}
                  source={image.routeImage}
                />
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </View>
  );
};
