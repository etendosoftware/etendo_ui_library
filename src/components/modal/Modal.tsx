// Imports
import React, { ReactNode, useEffect, useState } from 'react';
import {
  Text,
  View,
  Modal as ModalRN,
  ViewStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
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
  imageHeader?: ReactNode;
  visible: boolean;
  setVisible: any;
  disableTapOutside?: boolean;
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
  disableTapOutside = false,
  labelCloseButton,
  imageHeader,
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
            <View style={modalStyles.headerContainer}>
              {imageHeader && (
                <View style={modalStyles.imageHeaderContainer}>
                  {imageHeader}
                </View>
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
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </ModalRN>
  );
};

export default Modal;
