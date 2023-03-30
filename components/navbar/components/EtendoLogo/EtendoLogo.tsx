import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {LogoEtendoBase64} from '../../../../assets/images/logo/base64/logo-etendo-64';
import {styles} from './EtendoLogo.styles';
import {EtendoLogoProps} from '../../Navbar.types';

const EtendoLogo = ({onPress}: EtendoLogoProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{uri: LogoEtendoBase64}} />
    </TouchableOpacity>
  );
};

export default EtendoLogo;
