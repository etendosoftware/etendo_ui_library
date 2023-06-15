import {Dimensions, View} from 'react-native';
import React from 'react';
import {styles} from './Navbar.styles';
import {NavbarProps} from './Navbar.types';
import {Welcome, Profile, EtendoLogo} from './index';
import MenuBurger from './components/MenuBurger/MenuBurger';

const Navbar = ({
  name,
  email,
  leftComponent,
  rightComponent,
  optionsProfile,
  profileImage,
  onOptionSelectedProfile,
  onPressMenuBurger,
  onPressLogo,
}: NavbarProps) => {
  const screenWidth = Dimensions.get('window').width;
  const isTablet = screenWidth > 700;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {isTablet ? (
          <>
            <EtendoLogo onPress={onPressLogo} />
            <Welcome name={name + '!'} />
            {leftComponent}
          </>
        ) : (
          <MenuBurger onPress={onPressMenuBurger}></MenuBurger>
        )}
      </View>
      <View style={styles.rightContainer}>
        {isTablet ? <>{rightComponent}</> : null}
        <Profile
          data={optionsProfile}
          name={name}
          email={email}
          onOptionSelected={onOptionSelectedProfile}
          profileImage={profileImage}
        />
      </View>
    </View>
  );
};

export default Navbar;
