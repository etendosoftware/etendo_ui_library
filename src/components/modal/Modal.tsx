// Imports
import React, { ReactNode } from 'react';
import { Text, View, Modal as ModalRN, ViewStyle } from 'react-native';
import { styles as modalStyles } from './styles';
import { Button } from '../button';
import { CancelIcon } from '../../assets/images/icons';
import { ButtonContainer } from '../containers';
interface ModalProps {
  title?: string;
  children?: ReactNode;
  buttons?: ReactNode[];
  styles?: ViewStyle;
  fullScreen?: boolean;
  visible: boolean;
  setVisible: any;
}

const Modal = ({
  title,
  visible,
  setVisible,
  buttons,
  children,
  fullScreen = false,
}: ModalProps) => {
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
            fullScreen && {
              width: '100%',
              height: '100%',
              maxHeight: '100%',
              maxWidth: '100%',
            },
          ]}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              numberOfLines={1}
              style={modalStyles.modalText}
              ellipsizeMode="tail">
              {title}
            </Text>
            <Button
              typeStyle={'white'}
              iconRight={<CancelIcon />}
              onPress={() => setVisible(false)}
            />
          </View>
          {children && (
            <View style={modalStyles.childrenModalContainer}>{children}</View>
          )}
          <View style={modalStyles.buttonModalContainer}>
            {buttons?.length && (
              <ButtonContainer
                components={buttons}
                style={{
                  justifyContent: 'flex-end',
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
