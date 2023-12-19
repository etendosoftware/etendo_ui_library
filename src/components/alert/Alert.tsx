import React, { useState, useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { nextMessage, on, removeListener } from './AlertManager';
import { IMessage, StatusType } from './Alert.type';

import AlertMessage from './components/AlertMessage';

const HEIGHT_MESSAGE: number = 100;
const HEIGHT_WINDOWS: number = Dimensions.get('window').height - 50;

const Alert = () => {
  const [message, setMessage] = useState<string>('');
  const [typeMessage, setTypeMessage] = useState<StatusType>('info');
  const alertTimer = useRef<NodeJS.Timeout | number | undefined>(undefined);

  const slideAnim = useRef(new Animated.Value(HEIGHT_WINDOWS)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const slideIn = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: HEIGHT_WINDOWS - HEIGHT_MESSAGE,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideOut = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: HEIGHT_WINDOWS,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    const showListener = ({ message, type, duration }: IMessage) => {
      setMessage(message);
      setTypeMessage(type);
      slideIn();

      if (typeof alertTimer.current === 'number') {
        clearTimeout(alertTimer.current);
      }
      alertTimer.current = setTimeout(() => {
        slideOut();
      }, duration);
    };

    const clearListener = () => {
      slideOut();
    };

    on('clear', clearListener);
    on('show', showListener);

    return () => {
      removeListener('show', showListener);
      if (typeof alertTimer.current === 'number') {
        clearTimeout(alertTimer.current);
      }
      removeListener('clear', clearListener);
    };
  }, [slideAnim]);

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
