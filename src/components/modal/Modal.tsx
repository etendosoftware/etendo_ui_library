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
import { styles as modalStyles } from './styles';
import { Button } from '../button';
import { ButtonContainer } from '../containers';

interface ModalProps {
  buttons?: ReactNode[];
  children?: ReactNode;
  disableTapOutside?: boolean;
  fullScreen?: boolean;
  imageHeader?: ReactNode;
  labelCloseButton: string;
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
  imageHeader,
  labelCloseButton,
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
              <TouchableOpacity
                activeOpacity={1}
                style={modalStyles.childrenModalContainer}>
                <ScrollView style={{ flexGrow: 0 }}>
                  <View onStartShouldSetResponder={() => true}>{children}</View>
                </ScrollView>
              </TouchableOpacity>
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
