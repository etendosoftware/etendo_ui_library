import React, { ReactNode, useEffect, useState } from 'react';
import {
  Text,
  View,
  Modal as ModalRN,
  ViewStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { styles as modalStyles, stylesMaximized } from './styles';
import { Button } from '../button';
import { ButtonContainer } from '../containers';
import { CancelIcon } from '../../assets/images/icons';

interface ModalProps {
  buttons?: ReactNode[];
  children?: ReactNode;
  disableTapOutside?: boolean;
  fullScreen?: boolean;
  handleSave?: any;
  imageHeader?: ReactNode;
  labelCloseButton: string;
  labelSaveButton?: string;
  setVisible: any;
  styles?: ViewStyle;
  subtitle?: string;
  title: string;
  visible: boolean;
}

const Modal = ({
  buttons,
  children,
  disableTapOutside = false,
  fullScreen = false,
  handleSave,
  imageHeader,
  labelCloseButton,
  labelSaveButton,
  setVisible,
  subtitle,
  title,
  visible,
}: ModalProps) => {
  const [buttonsToDisplay, setButtonsToDisplay] = useState<ReactNode[]>([
    <Button
      typeStyle={'white'}
      text={labelCloseButton}
      onPress={() => setVisible(false)}
    />,
    handleSave && labelSaveButton ? (
      <Button typeStyle={'white'} text={labelSaveButton} onPress={handleSave} />
    ) : null,
  ]);

  useEffect(() => {
    if (buttons) {
      setButtonsToDisplay([...buttons, ...buttonsToDisplay]);
    }
  }, []);

  const MinimizedView = () => (
    <>
      <View style={modalStyles.headerContainer}>
        {imageHeader && (
          <View style={modalStyles.imageHeaderContainer}>{imageHeader}</View>
        )}
        <Text
          numberOfLines={1}
          style={modalStyles.modalTitle}
          ellipsizeMode="tail">
          {title}
        </Text>
        {subtitle && (
          <Text
            numberOfLines={2}
            style={modalStyles.modalSubtitle}
            ellipsizeMode="tail">
            {subtitle}
          </Text>
        )}
      </View>
      {children && (
        <TouchableOpacity
          activeOpacity={1}
          style={modalStyles.childrenModalContainer}>
          <ScrollView style={{ flexGrow: 0 }}>
            <View onStartShouldSetResponder={() => true}>{children}</View>
          </ScrollView>
        </TouchableOpacity>
      )}
      <View style={modalStyles.buttonModalContainer}>
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

  const MaximizedView = () => (
    <View style={{ justifyContent: 'flex-start' }}>
      <View style={stylesMaximized.headerContainer}>
        <View style={stylesMaximized.titleCloseContainer}>
          <Button
            typeStyle={'white'}
            iconLeft={<CancelIcon />}
            onPress={() => setVisible(false)}
          />
          <Text
            numberOfLines={1}
            style={stylesMaximized.modalTitle}
            ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        {buttonsToDisplay.length && (
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
          style={stylesMaximized.childrenModalContainer}>
          <ScrollView style={{ flexGrow: 0 }}>
            <View onStartShouldSetResponder={() => true}>{children}</View>
          </ScrollView>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <ModalRN
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableOpacity
        style={modalStyles.modalContainer}
        activeOpacity={1}
        onPressOut={() => !disableTapOutside && setVisible(false)}>
        <TouchableWithoutFeedback>
          <View
            style={[
              modalStyles.modalContent,
              fullScreen && modalStyles.modalFullScreen,
            ]}>
            {fullScreen ? <MaximizedView /> : <MinimizedView />}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </ModalRN>
  );
};

export default Modal;
