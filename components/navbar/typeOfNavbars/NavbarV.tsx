/*  Navbar vertical: this component is created for generic screen dimensions 
    because its parent component will give the screen size desired by the programmer 
    in the design of the application in which it will be used, 
    so it is not necessary to define its dimensions depending on the screen where it is located */

/* Imports */
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {Info} from '../Navbar.types';
import {NavbarVStyleVariant} from '../Navbar.styles';
import {BLUE, WHITE, YELLOW} from '../../../styles/colors';

export const NavbarV = ({
  data,
  onChangeSelected,
  renderItem,
  pathname,
}: any) => {
  // Use of states to control navigation
  const [currentNav, setCurrentNav] = useState<string>('');

  return (
    <>
      <ScrollView
        style={NavbarVStyleVariant.generic.container}
        showsVerticalScrollIndicator={false}
      >
        {data.map((image: Info) => {
          return (
            <TouchableOpacity
              onPress={() =>
                /* Allows to detect the selected navigation */
                onChangeSelected({
                  routeImage: image.routeImage,
                  routeNav: image.routeNav,
                  key: image.key,
                  name: image.name,
                })
              }
              key={image.key}
            >
              {NavButton(
                currentNav,
                setCurrentNav,
                image.name,
                image.routeImage,
                image.routeNav,
                image.key,
                renderItem,
                pathname,
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

// Component created internally with the purpose of creating the buttons of this type of navigation
const NavButton = (
  currentNav: any,
  setCurrentNav: any,
  title: string,
  image: React.ReactNode,
  routeNav: any,
  key: string,
  renderItem: any,
  pathname: any,
) => {
  const path = pathname.split('/');
  useEffect(() => {
    if (key === path[1]) {
      setCurrentNav(key);
    }
  }, [path]);

  return (
    <>
      <TouchableOpacity>
        {renderItem ? (
          renderItem(routeNav, image, currentNav, key, title)
        ) : (
          <View
            style={{
              /* Primary */
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: currentNav === key ? YELLOW : 'transparent',
            }}
          >
            {image}

            <Text
              style={{
                fontSize: 10,
                justifyContent: 'center',
                fontWeight: 'bold',
                color: currentNav === key ? BLUE : WHITE,
                alignContent: 'center',
                alignSelf: 'center',
                textTransform: 'uppercase',

                marginTop: 10,
              }}
            >
              {title}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};
