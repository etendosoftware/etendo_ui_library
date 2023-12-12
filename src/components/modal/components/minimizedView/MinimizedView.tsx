import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
  return (
    <>
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
      <View style={styles.childrenModalContainer}>
        {children && (
          <TouchableOpacity activeOpacity={1} style={{ maxHeight: '100%' }}>
            <ScrollView style={{ flexGrow: 0 }}>
              <View onStartShouldSetResponder={() => true}>{children}</View>
            </ScrollView>
          </TouchableOpacity>
        )}
      </View>
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
    </>
  );
};

export default MinimizedView;
