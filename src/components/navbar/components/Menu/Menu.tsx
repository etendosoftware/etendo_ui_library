import { TouchableOpacity } from 'react-native';
import React from 'react';
import { MenuProps } from '../../Navbar.types';
import { MenuIcon } from '../../../../assets/images/icons/MenuIcon';
import { NEUTRAL_0 } from '../../../../styles/colors';
import { styles } from './Menu.styles';

const Menu = ({ onPress }: MenuProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MenuIcon fill={NEUTRAL_0} style={styles.menuImage} />
    </TouchableOpacity>
  );
};

export default Menu;
