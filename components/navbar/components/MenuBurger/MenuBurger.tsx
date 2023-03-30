import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {MenuBurger64} from '../../../../assets/images/icons/base64/menu-burger-64';
import {styles} from './MenuBurger.styles';
import {MenuBurgerProps} from '../../Navbar.types';

const MenuBurger = ({onPress}: MenuBurgerProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: MenuBurger64}} style={styles.menuBurgerImage} />
    </TouchableOpacity>
  );
};

export default MenuBurger;
