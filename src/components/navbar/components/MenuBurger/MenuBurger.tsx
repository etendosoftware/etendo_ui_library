import { TouchableOpacity } from 'react-native';
import React from 'react';
import { MenuBurgerProps } from '../../Navbar.types';
import { MenuburgerIcon } from '../../../../assets/images/icons/MenuburgerIcon';
import { NEUTRAL_0 } from '../../../../styles/colors';
import { styles } from './MenuBurger.styles';

const MenuBurger = ({ onPress }: MenuBurgerProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MenuburgerIcon fill={NEUTRAL_0} style={styles.menuBurgerImage} />
    </TouchableOpacity>
  );
};

export default MenuBurger;
