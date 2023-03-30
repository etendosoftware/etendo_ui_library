import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './Profile.styles';
import {ProfileImageProps} from '../../Navbar.types';

const ProfileImage = ({image, name}: ProfileImageProps) => {
  if (image) {
    return (
      <View>
        <Image source={{uri: image}} style={styles.roundImage} />
      </View>
    );
  } else {
    return (
      <View style={styles.roundImage}>
        <Text style={styles.nameText}>
          {name ? name.charAt(0).toUpperCase() : 'A'}
        </Text>
      </View>
    );
  }
};

export default ProfileImage;
