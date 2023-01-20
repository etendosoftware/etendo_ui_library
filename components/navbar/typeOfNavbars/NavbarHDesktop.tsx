//  Navbar horizontal for desktop screen

/* Imports */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Info, NavbarHorizontalProps} from '../Navbar.types';
import {NavbarHStyleVariant} from '../Navbar.styles';

import {ViewEtendo as View} from '../../viewEtendo/ViewEtendo';

export const NavbarHDesktop = ({
  data,
  onChangeSelected,
  renderItem,
}: NavbarHorizontalProps) => {
  return (
    <>
      <View style={NavbarHStyleVariant.desktop.container}>
        <TouchableOpacity onPress={() => onChangeSelected} activeOpacity={1}>
          {renderItem ? (
            renderItem(data[0].routeNav, data[0].routeImage)
          ) : (
            <img
              src={data[0].routeImage}
              style={{
                height: 27,
                marginLeft: 14,
              }}
            />
          )}
        </TouchableOpacity>
        <View style={NavbarHStyleVariant.desktop.containerImages}>
          {data.map((image: Info, i: number) => {
            if (i >= 2 && i < data.length - 1) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    onChangeSelected({
                      routeImage: image.routeImage,
                      routeNav: image.routeNav,
                      key: image.key,
                      name: image.name,
                    })
                  }
                  key={image.key}
                  activeOpacity={1}
                >
                  <img
                    src={image.routeImage}
                    style={{
                      height: 22,
                      marginRight: 28,
                    }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </View>
        <View style={NavbarHStyleVariant.desktop.containerUser}>
          <TouchableOpacity onPress={() => onChangeSelected} activeOpacity={1}>
            {data.length > 1 && (
              <img
                src={data[data.length - 1].routeImage}
                style={{
                  height: 22,
                  marginLeft: 20,
                  marginRight: 7,
                }}
              />
            )}
          </TouchableOpacity>
          {data.length > 0 && (
            <Text style={NavbarHStyleVariant.desktop.textUser}>
              {data[data.length - 1].name}
            </Text>
          )}
        </View>
      </View>
    </>
  );
};
