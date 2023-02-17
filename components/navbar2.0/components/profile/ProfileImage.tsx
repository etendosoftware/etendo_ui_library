import {View, Text, Image, ImageProps, ImageSourcePropType} from 'react-native';
import React from 'react';
import {styles} from './Profile.styles';
interface ProfileImageProps{
    source?: ImageSourcePropType, name?: string
}
const ProfileImage = ({source,name}:ProfileImageProps) => {
    

  if (source) {
    return  <View>
    <Image source={source} style={styles.roundImage} />
  </View>
  } else {
    return <View style={styles.roundImage}>
            <Text style={styles.nameText}>
            {name ? name.charAt(0).toUpperCase(): 'A'}
            </Text>
      </View>
    
  }
};

export default ProfileImage;
