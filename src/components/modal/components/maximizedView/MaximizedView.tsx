import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ButtonContainer } from '../../../containers';
import { styles } from './MaximizedView.styles';
import { Button } from '../../../button';
import { CancelIcon } from '../../../../assets/images/icons';

interface MaximizedViewProps {
  buttonsToDisplay?: React.ReactNode[];
  children?: React.ReactNode;
  imageHeader?: React.ReactNode;
  setVisible: any;
  subtitle?: string;
  title: string;
}

const MaximizedView = ({
  buttonsToDisplay,
  children,
  setVisible,
  title,
}: MaximizedViewProps) => {
  return (
    <View style={{ justifyContent: 'flex-start' }}>
      <View style={styles.headerContainer}>
        <View style={styles.titleCloseContainer}>
          <Button
            typeStyle={'white'}
            iconLeft={<CancelIcon />}
            onPress={() => setVisible(false)}
          />
          <Text
            numberOfLines={1}
            style={styles.modalTitle}
            ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        {buttonsToDisplay?.length && (
          <ButtonContainer
            components={[buttonsToDisplay[buttonsToDisplay.length - 1]]}
            style={{
              justifyContent: 'flex-end',
              paddingVertical: 0,
            }}
          />
        )}
      </View>
      {children && (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.childrenModalContainer}>
          <ScrollView style={{ flexGrow: 0 }}>
            <View onStartShouldSetResponder={() => true}>{children}</View>
          </ScrollView>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MaximizedView;
