/*  Navbar vertical: this component is created for generic screen dimensions 
    because its parent component will give the screen size desired by the programmer 
    in the design of the application in which it will be used, 
    so it is not necessary to define its dimensions depending on the screen where it is located */

/* Imports */
import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import {Info} from '../Navbar.types';
import {NavbarVStyleVariant} from '../Navbar.styles';
import {BLUE, WHITE, YELLOW} from '../../../styles/colors';

export const NavbarV = ({data, onChangeSelected}: any) => {
  // Use of states to control navigation
  const [currentNav, setCurrentNav] = useState<string>('');

  return (
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
            {NavButton(currentNav, setCurrentNav, image.name, image.routeImage)}
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

// Component created internally with the purpose of creating the buttons of this type of navigation
const NavButton = (
  currentNav: any,
  setCurrentNav: any,
  title: string,
  image: any,
) => {
  const {width} = useWindowDimensions();

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setCurrentNav(title);
        }}
      >
        <View
          style={{
            /* Primary */
            flex: 1,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: currentNav === title ? YELLOW : 'transparent',
            paddingHorizontal: '100%',
            paddingVertical: '20%',
          }}
        >
          <img
            src={image}
            style={{
              /* Primary */
              width:  50,
              height: 50,
              // tintColor: currentNav === title ? BLUE : WHITE,
            }}
          />

          <Text
            style={{
              /* Primary */
              fontSize: 10,
              justifyContent: 'center',
              //   fontFamily: INTER_SEMIBOLD,
              fontWeight: 'bold',
              marginTop: 15,
              color: currentNav === title ? BLUE : WHITE,
              alignContent: 'center',
              alignSelf: 'center',
              textTransform: 'uppercase',
      fontFamily: "Montserrat"

            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
