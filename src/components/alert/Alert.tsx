import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions, Keyboard } from 'react-native';
import { nextMessage, on, removeListener } from './AlertManager';
import { IMessage, StatusType } from './Alert.type';
import AlertMessage from './components/AlertMessage';

const HEIGHT_MESSAGE = 120;

const Alert = () => {
  const [message, setMessage] = useState<string>('');
  const [typeMessage, setTypeMessage] = useState<StatusType>('info');
  const alertTimer = useRef<NodeJS.Timeout | number | undefined>(undefined);
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  );
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const slideAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = (show: boolean) => {
    const finalPosition = show
      ? windowHeight - HEIGHT_MESSAGE - keyboardHeight
      : windowHeight;

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: finalPosition,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: show ? 1 : 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    const updateDimensions = () => {
      const newHeight = Dimensions.get('window').height;
      setWindowHeight(newHeight);
    };

    const dimensionsSubscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e =>
      setKeyboardHeight(e.endCoordinates.height),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardHeight(0),
    );

    return () => {
      dimensionsSubscription.remove();
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    slideAnim.setValue(windowHeight);

    const showListener = ({ message, type, duration }: IMessage) => {
      setMessage(message);
      setTypeMessage(type);
      startAnimation(true);

      if (typeof alertTimer.current === 'number') {
        clearTimeout(alertTimer.current);
      }

      alertTimer.current = setTimeout(() => {
        startAnimation(false);
      }, duration);
    };

    on('show', showListener);
    on('clear', () => startAnimation(false));

    return () => {
      removeListener('show', showListener);
      removeListener('clear', () => startAnimation(false));
      if (typeof alertTimer.current === 'number') {
        clearTimeout(alertTimer.current);
      }
    };
  }, [windowHeight, keyboardHeight]);

  const onPressClose = () => {
    if (typeof alertTimer.current === 'number') {
      clearTimeout(alertTimer.current);
    }
    nextMessage();
  };

  return (
    <AlertMessage
      typeMessage={typeMessage}
      slideAnim={slideAnim}
      opacityAnim={opacityAnim}
      onPressClose={onPressClose}
      message={message}
    />
  );
};

export default Alert;
