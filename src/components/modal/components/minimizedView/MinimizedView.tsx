import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonContainer } from '../../../containers';
import { styles } from './MinimizedView.styles';
import { IMinimizedViewProps } from './MinimizedView.types';

const MinimizedView = ({
  buttonsToDisplay,
  children,
  imageHeader,
  subtitle,
  title,
}: IMinimizedViewProps) => {
  const [currentDimensions, setcurrentDimensions] = useState(
    Dimensions.get('window').height / 4,
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setcurrentDimensions(window.height / 4);
    });
    return () => subscription?.remove();
  });

  return (
    <View>
      <View style={styles.headerContainer}>
        {imageHeader && (
          <View style={styles.imageHeaderContainer}>{imageHeader}</View>
        )}
        <Text numberOfLines={1} style={styles.modalTitle} ellipsizeMode="tail">
          {title}
        </Text>
        {subtitle && (
          <Text
            numberOfLines={2}
            style={styles.modalSubtitle}
            ellipsizeMode="tail">
            {subtitle}
          </Text>
        )}
      </View>
      {children && (
        <View
          style={[
            Platform.OS === 'web'
              ? styles.childrenModalContainerWeb
              : styles.childrenModalContainer,
            { maxHeight: currentDimensions },
          ]}>
          <TouchableOpacity activeOpacity={1}>
            <ScrollView style={{ flexGrow: 0 }}>
              <View onStartShouldSetResponder={() => true}>{children}</View>
            </ScrollView>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.buttonModalContainer}>
        {buttonsToDisplay?.length && (
          <ButtonContainer
            components={buttonsToDisplay}
            style={{
              justifyContent: 'flex-end',
              paddingVertical: 0,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default MinimizedView;
