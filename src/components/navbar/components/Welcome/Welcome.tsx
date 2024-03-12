import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './Welcome.styles';
import { SECONDARY_100 } from '../../../../styles/colors';
import { SparksIcon } from '../../../../assets/images/icons/SparksIcon';

interface WelcomeProps {
  name: string | undefined;
  title: string | undefined;
}

const Welcome = ({ name, title }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <SparksIcon style={styles.imageStar} fill={SECONDARY_100} />
      <View>
        {(title || name) && (
          <View style={styles.titleContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.titleWelcome}>
              {title}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.titleName}>
              {name ? name + '!' : 'User!'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Welcome;
