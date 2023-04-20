import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './EtendoLogo.styles';
import {EtendoLogoProps} from '../../Navbar.types';
import {EtendoWhiteLogo} from '../../../../assets/images/logo/EtendoWhiteLogo';
import { NEUTRALS_100 } from '../../../../styles/colors';

const EtendoLogo = ({onPress}: EtendoLogoProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <EtendoWhiteLogo fill={NEUTRALS_100} style={styles.image} />
    </TouchableOpacity>
  );
};

export default EtendoLogo;
