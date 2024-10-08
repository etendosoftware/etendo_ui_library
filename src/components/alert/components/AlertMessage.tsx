import React, { useMemo } from 'react';
import {
  Animated,
  Text,
  Pressable,
  ColorValue,
  DimensionValue,
} from 'react-native';
import { styles } from '../Alert.style';
import {
  AlertCircleFill,
  CheckCircleFillIcon,
  XCircleFillIcon,
  XIcon,
} from '../../../assets/images/icons';
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
} from '../../../styles/colors';
import { IAlertMessage } from '../Alert.type';
const MAX_LENGTH_TEXT: number = 70;

const AlertMessage = ({
  style,
  typeMessage = 'info',
  slideAnim = new Animated.Value(1),
  opacityAnim = new Animated.Value(1),
  onPressClose,
  message = '',
}: IAlertMessage) => {
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
          <CheckCircleFillIcon style={styles.messageIcon} fill={imageColor} />
        );
        break;
      case 'error':
        backgroundColor = DANGER_100;
        textColor = DANGER_700;
        imageColor = DANGER_700;
        marginLeft = 8;
        icon = <XCircleFillIcon style={styles.messageIcon} fill={imageColor} />;
        break;
      case 'warning':
        backgroundColor = IP_100;
        textColor = IP_900;
        imageColor = IP_600;
        marginLeft = 8;
        icon = <AlertCircleFill style={styles.messageIcon} fill={imageColor} />;
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
        style,
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
        <XIcon style={styles.closeIcon} fill={stylesAlert.imageColor} />
      </Pressable>
    </Animated.View>
  );
};

export default AlertMessage;
