import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ButtonContainer } from '../../../containers';
import { styles } from './MaximizedView.styles';
import { Button } from '../../../button';
import { CancelIcon } from '../../../../assets/images/icons';
import { IMaximizedViewProps } from './MaximizedView.types';

const MaximizedView = ({
  buttonsToDisplay,
  children,
  setVisible,
  title,
}: IMaximizedViewProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        {children}
      </View>
    </SafeAreaView>
  );
};

export default MaximizedView;
