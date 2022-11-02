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
import stylesNavbarV from './NavbarV.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from '../../../../styles/Home.module.css';

export const NavbarV = ({data, onChangeSelected}: any) => {
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
              )}
            </TouchableOpacity>
          );
        })}
        {/* <div className={styles.arrowRight} />; */}
      </ScrollView>
    </>
  );
};

// Component created internally with the purpose of creating the buttons of this type of navigation
const NavButton = (
  currentNav: any,
  setCurrentNav: any,
  title: string,
  image: any,
  routeNav: any,
) => {
  const router = useRouter();
  const {pathname} = router;
  console.log('image', image);
  console.log('routenav', routeNav);
  console.log('pathname', pathname);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setCurrentNav(title);
        }}
        activeOpacity={1}
      >
        <Link href={routeNav}>
          <View
            style={{
              /* Primary */
              flex: 1,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor:
                routeNav === pathname ||
                routeNav.replace('/vehicles', '/configuration') === pathname ||
                routeNav + '/all' === pathname ||
                routeNav + '/alerts' === pathname ||
                routeNav + '/errors' === pathname ||
                routeNav + '/vehicles' === pathname
                  ? YELLOW
                  : 'transparent',
              paddingHorizontal: '100%',
              paddingVertical: '11%',
            }}
          >
            {routeNav === pathname ||
            routeNav + 'vehicles' === pathname ||
            routeNav + '/vehicles' === pathname ||
            routeNav.replace('/vehicles', '/configuration') === pathname ||
            routeNav + '/all' === pathname ||
            routeNav + '/alerts' === pathname ||
            routeNav + '/errors' === pathname ? (
              <>
                <img
                  src={image + '-blue.png'}
                  style={{
                    width: 27,
                    height: 27,
                    // tintColor: currentNav === title ? BLUE : WHITE,
                  }}
                />
              </>
            ) : (
              <img
                src={image + '-white.png'}
                style={{
                  width: 27,
                  height: 27,
                  // tintColor: currentNav === title ? BLUE : WHITE,
                }}
              />
            )}

            <Text
              style={{
                /* Primary */
                fontSize: 9.4,
                justifyContent: 'center',
                fontFamily: 'Poppins',
                fontWeight: '600',
                marginTop: 6,
                color:
                  routeNav === pathname ||
                  routeNav + 'vehicles' === pathname ||
                  routeNav + '/all' === pathname ||
                  routeNav + '/vehicles' === pathname ||
                  routeNav + '/alerts' === pathname ||
                  routeNav + '/errors' === pathname ||
                  routeNav.replace('/vehicles', '/configuration') === pathname
                    ? BLUE
                    : WHITE,
                alignContent: 'center',
                alignSelf: 'center',
              }}
            >
              {title}
            </Text>
          </View>
        </Link>
      </TouchableOpacity>
    </>
  );
};
