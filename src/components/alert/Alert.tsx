import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Text,
  Animated,
  ColorValue,
  Pressable,
  DimensionValue,
} from 'react-native';
import { nextMessage, on, removeListener } from './AlertManager';
import { IMessage, StatusType } from './Alert.type';
import {
  DANGER_100,
  DANGER_700,
  IP_100,
  IP_600,
  IP_900,
  PRIMARY_100,
  SUCCESS_110,
  SUCCESS_800,
  SUCCESS_900,
  TERTIARY_100,
  TERTIARY_101,
} from '../../styles/colors';
import {
  CancelCircleIcon,
  CancelIcon,
  WarningCircleIcon,
  SuccessCircleIcon,
} from '../../assets/images/icons';
import { styles } from './Alert.style';

const MAX_LENGTH_TEXT: number = 70;

const Alert = () => {
  const [message, setMessage] = useState<string>('');
  const [typeMessage, setTypeMessage] = useState<StatusType>('info');
  const alertTimer = useRef<NodeJS.Timeout | number | undefined>(undefined);
  const slideAnim = useRef(new Animated.Value(100)).current;

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: -50,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 500,
      useNativeDriver: true,
    }).start();
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
        setMessage('');
        slideOut();
      }, duration);
    };
    const clearListener = () => {
      setMessage('');
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

  const stylesAlert = useMemo(() => {
    let backgroundColor: ColorValue;
    let textColor: ColorValue;
    let icon: JSX.Element;
    let marginLeft: DimensionValue;

    switch (typeMessage) {
      case 'info':
        backgroundColor = TERTIARY_101;
        textColor = PRIMARY_100;
        marginLeft = 0;
        icon = <></>;
        break;
      case 'success':
        backgroundColor = SUCCESS_110;
        textColor = SUCCESS_900;
        marginLeft = 8;
        icon = (
          <SuccessCircleIcon
            style={{ width: 20, height: 20, marginRight: 8 }}
            fill={SUCCESS_800}
          />
        );
        break;
      case 'error':
        backgroundColor = DANGER_100;
        textColor = DANGER_700;
        marginLeft = 8;
        icon = (
          <CancelCircleIcon
            style={{ width: 20, height: 20, marginRight: 8 }}
            fill={DANGER_700}
          />
        );
        break;
      case 'warning':
        backgroundColor = IP_100;
        textColor = IP_900;
        marginLeft = 8;
        icon = (
          <WarningCircleIcon style={{ width: 20, height: 20 }} fill={IP_600} />
        );
        break;
      default:
        backgroundColor = TERTIARY_100;
        textColor = PRIMARY_100;
        marginLeft = 0;
        icon = <></>;
    }

    return { backgroundColor, textColor, icon, marginLeft };
  }, [typeMessage]);

  return (
    <Animated.View
      style={[
        { backgroundColor: stylesAlert.backgroundColor },
        styles.container,
        { transform: [{ translateY: slideAnim }] },
      ]}>
      {stylesAlert.icon}
      <Text
        numberOfLines={2}
        style={[
          { color: stylesAlert.textColor, marginLeft: stylesAlert.marginLeft },
          styles.text,
        ]}>
        {message.length > MAX_LENGTH_TEXT
          ? message.slice(0, MAX_LENGTH_TEXT)
          : message}
      </Text>
      <Pressable style={styles.closeButton} onPress={onPressClose}>
        <CancelIcon style={styles.closeIcon} />
      </Pressable>
    </Animated.View>
  );
};

export default Alert;
