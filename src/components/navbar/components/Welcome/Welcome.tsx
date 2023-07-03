import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Welcome.styles';
import {StarIcon} from '../../../../assets/images/icons/StarIcon';
import {SECONDARY_100} from '../../../../styles/colors';

interface WelcomeProps {
  name: string | undefined;
}

const Welcome = ({name}: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <StarIcon style={styles.imageStar} fill={SECONDARY_100} />
      <View>
        <Text style={styles.titleWelcome}>Welcome to Etendo,</Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleName}>
          {name ? name + '!' : 'User!'}
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
