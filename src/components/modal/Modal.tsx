// Imports
import React, { ReactNode, useEffect, useState } from 'react';
import { Text, View, Modal as ModalRN, ViewStyle } from 'react-native';
import { styles as modalStyles } from './styles';
import { Button } from '../button';
import { CancelIcon } from '../../assets/images/icons';
import { ButtonContainer } from '../containers';
interface ModalProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  buttons?: ReactNode[];
  styles?: ViewStyle;
  fullScreen?: boolean;
  visible: boolean;
  setVisible: any;
  labelCloseButton: string;
}

const Modal = ({
  title,
  subtitle,
  visible,
  setVisible,
  buttons,
  children,
  fullScreen = false,
  labelCloseButton,
}: ModalProps) => {
  const [buttonsToDisplay, setButtonsToDisplay] = useState<ReactNode[]>([
    <Button
      typeStyle={'white'}
      text={labelCloseButton}
      onPress={() => setVisible(false)}
    />,
  ]);

  useEffect(() => {
    if (buttons) {
      setButtonsToDisplay([...buttonsToDisplay, ...buttons]);
    }
  }, []);

  return (
    <ModalRN
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={modalStyles.modalContainer}>
        <View
          style={[
            modalStyles.modalContent,
            fullScreen && modalStyles.modalFullScreen,
          ]}>
          <View style={modalStyles.headerContainer}>
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
            <View style={modalStyles.childrenModalContainer}>{children}</View>
          )}
          <View style={modalStyles.buttonModalContainer}>
            {buttonsToDisplay.length && (
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
      </View>
    </ModalRN>
  );
};

export default Modal;
