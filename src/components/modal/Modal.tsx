import React, { ReactNode, useEffect, useState } from 'react';
import {
  View,
  Modal as ModalRN,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../button';
import MaximizedView from './components/maximizedView/MaximizedView';
import MinimizedView from './components/minimizedView/MinimizedView';
import { styles } from './Modal.styles';
import { IModalProps } from './Modal.types';

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
}: IModalProps) => {
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

  return (
    <ModalRN
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={() => !disableTapOutside && setVisible(false)}>
        <TouchableWithoutFeedback>
          <View
            style={[styles.modalContent, fullScreen && styles.modalFullScreen]}>
            {fullScreen ? (
              <MaximizedView
                imageHeader={imageHeader}
                title={title}
                subtitle={subtitle}
                children={children}
                buttonsToDisplay={buttonsToDisplay}
                setVisible={setVisible}
              />
            ) : (
              <MinimizedView
                imageHeader={imageHeader}
                title={title}
                subtitle={subtitle}
                children={children}
                buttonsToDisplay={buttonsToDisplay}
              />
            )}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </ModalRN>
  );
};

export default Modal;
