import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './Profile.styles';
import { ProfileImageProps } from '../../Navbar.types';

const ProfileImage = ({
  image,
  name,
  inOptions,
  isTablet,
}: ProfileImageProps) => {
  if (image) {
    return (
      <View style={[styles.roundImage, inOptions && { height: 40, width: 40 }]}>
        {React.cloneElement(image, {
          style: { width: isTablet ? 52 : 48, height: isTablet ? 52 : 48 },
        })}
      </View>
    );
  }
  return (
    <View style={[styles.roundImage, inOptions && { height: 40, width: 40 }]}>
      <Text style={styles.nameText}>
        {name?.charAt(0)?.toUpperCase() ?? 'U'}
      </Text>
    </View>
  );
};

export default ProfileImage;
