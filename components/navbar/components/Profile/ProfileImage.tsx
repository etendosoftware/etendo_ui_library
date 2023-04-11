import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './Profile.styles';
import {ProfileImageProps} from '../../Navbar.types';

const ProfileImage = ({image, name}: ProfileImageProps) => {
  let newImageMap: HTMLElement = <></>;
  useEffect(() => {
    if (image) {
      newImageMap = React.cloneElement(image, {
        style: styles.profileImageSize,
      });
    }
  }, []);

  if (image) {
    return <View style={styles.roundImage}>{image && image}</View>;
  }
  return (
    <View style={styles.roundImage}>
      <Text style={styles.nameText}>
        {name ? name.charAt(0).toUpperCase() : 'A'}
      </Text>
    </View>
  );
};

export default ProfileImage;
