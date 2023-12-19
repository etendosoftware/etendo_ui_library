import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Text,
  Animated,
  ColorValue,
  Pressable,
  DimensionValue,
  View,
  Dimensions,
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

  const stylesAlert = useMemo(() => {
    let backgroundColor: ColorValue;
    let textColor: ColorValue;
    let icon: JSX.Element;
    let marginLeft: DimensionValue;
    let imageColor: ColorValue;

    switch (typeMessage) {
      case 'info':
        backgroundColor = TERTIARY_101;
        textColor = PRIMARY_100;
        imageColor = PRIMARY_100;
        marginLeft = 0;
        icon = <></>;
        break;
      case 'success':
        backgroundColor = SUCCESS_110;
        textColor = SUCCESS_900;
        imageColor = SUCCESS_800;
        marginLeft = 8;
        icon = (
          <SuccessCircleIcon
            style={{ width: 20, height: 20, marginRight: 8 }}
            fill={imageColor}
          />
        );
        break;
      case 'error':
        backgroundColor = DANGER_100;
        textColor = DANGER_700;
        imageColor = DANGER_700;
        marginLeft = 8;
        icon = (
          <CancelCircleIcon
            style={{ width: 20, height: 20, marginRight: 8 }}
            fill={imageColor}
          />
        );
        break;
      case 'warning':
        backgroundColor = IP_100;
        textColor = IP_900;
        imageColor = IP_600;
        marginLeft = 8;
        icon = (
          <WarningCircleIcon
            style={{ width: 20, height: 20 }}
            fill={imageColor}
          />
        );
        break;
      default:
        backgroundColor = TERTIARY_100;
        textColor = PRIMARY_100;
        marginLeft = 0;
        imageColor = PRIMARY_100;
        icon = <></>;
    }

    return { backgroundColor, textColor, icon, marginLeft, imageColor };
  }, [typeMessage]);

  return (
    <Animated.View
      style={[
        { backgroundColor: stylesAlert.backgroundColor },
        styles.container,
        { transform: [{ translateY: slideAnim }], opacity: opacityAnim },
      ]}>
      {stylesAlert.icon}
      <Text
        numberOfLines={2}
        style={[
          {
            color: stylesAlert.textColor,
            marginLeft: stylesAlert.marginLeft,
          },
          styles.text,
        ]}>
        {message.length > MAX_LENGTH_TEXT
          ? message.slice(0, MAX_LENGTH_TEXT)
          : message}
      </Text>
      <Pressable style={styles.closeButton} onPress={onPressClose}>
        <CancelIcon style={styles.closeIcon} fill={stylesAlert.imageColor} />
      </Pressable>
    </Animated.View>
  );
};

export default Alert;
