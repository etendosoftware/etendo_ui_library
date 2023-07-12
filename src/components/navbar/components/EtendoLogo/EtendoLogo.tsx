import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './EtendoLogo.styles';
import {EtendoLogoProps} from '../../Navbar.types';
import {EtendoWhiteLogo} from '../../../../assets/images/logo/EtendoWhiteLogo';
import {NEUTRAL_0} from '../../../../styles/colors';

const EtendoLogo = ({onPress, pressable}: EtendoLogoProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      touchSoundDisabled={pressable}
      disabled={!pressable}>
      <EtendoWhiteLogo fill={NEUTRAL_0} style={styles.image} />
    </TouchableOpacity>
  );
};

export default EtendoLogo;
