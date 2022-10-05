import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Info, NavbarHorizontalProps} from '../Navbar.types';
import {NavbarHStyleVariant} from '../Navbar.styles';

export const NavbarHDesktop = ({
  data,
  onChangeSelected,
}: NavbarHorizontalProps) => {
  return (
    <View style={NavbarHStyleVariant.desktop.container}>
      <TouchableOpacity onPress={() => onChangeSelected}>
        <Image
          style={NavbarHStyleVariant.desktop.tinyLogo}
          source={data[0].routeImage}
        />
      </TouchableOpacity>

      <View style={NavbarHStyleVariant.desktop.containerImages}>
        {data.map((image: Info, i: number) => {
          if (i >= 2 && i < data.length - 1) {
            return (
              <TouchableOpacity onPress={() => onChangeSelected}>
                <Image
                  style={NavbarHStyleVariant.desktop.navIcons}
                  source={image.routeImage}
                />
              </TouchableOpacity>
            );
          }
        })}
      </View>

      <View style={NavbarHStyleVariant.desktop.containerUser}>
        <TouchableOpacity onPress={() => onChangeSelected}>
          <Image
            style={NavbarHStyleVariant.desktop.user}
            source={data[data.length - 1].routeImage}
          />
        </TouchableOpacity>
        <Text style={NavbarHStyleVariant.desktop.textUser}>{data[0].name}</Text>
      </View>
    </View>
  );
};
