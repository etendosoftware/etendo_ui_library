import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Profile.styles';
import {ProfileImageProps} from '../../Navbar.types';

const ProfileImage = ({image, name}: ProfileImageProps) => {

  if (image) {
     return <View style={styles.roundImage}>{React.cloneElement(image, { style: styles.profileImageSize })}</View>;
  }
  return (
    <View style={styles.roundImage}>
      <Text style={styles.nameText}>{name?.charAt(0)?.toUpperCase() ?? 'A'}</Text>
    </View>
  );
};

export default ProfileImage;
