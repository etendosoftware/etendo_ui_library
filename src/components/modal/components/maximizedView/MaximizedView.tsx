import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './MaximizedView.styles';
import { Button } from '../../../button';
import { XIcon } from '../../../../assets/images/icons';
import { IMaximizedViewProps } from './MaximizedView.types';
import { GridContainer } from '../../../containers/gridContainer';

const MaximizedView = ({
  buttonsToDisplay,
  children,
  setVisible,
  title,
}: IMaximizedViewProps) => {
  const hasActionButton = !!buttonsToDisplay && buttonsToDisplay?.length > 1;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: 'flex-start' }}>
        <View style={styles.headerContainer}>
          <View
            style={[
              styles.titleCloseContainer,
              {
                width: hasActionButton ? '70%' : '85%',
                marginRight: hasActionButton ? 16 : 0,
              },
            ]}>
            <Button
              typeStyle={'white'}
              iconLeft={<XIcon />}
              onPress={() => setVisible(false)}
            />
            <Text
              numberOfLines={1}
              style={styles.modalTitle}
              ellipsizeMode="tail">
              {title}
            </Text>
          </View>
          {hasActionButton && buttonsToDisplay && (
            <GridContainer
              components={[buttonsToDisplay[buttonsToDisplay.length - 1]]}
              stylesContainer={styles.buttonContainer}
            />
          )}
        </View>
        {children && (
          <View style={styles.childrenModalContainer}>
            <ScrollView style={{ flexGrow: 0 }}>
              <View onStartShouldSetResponder={() => true}>{children}</View>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default MaximizedView;
