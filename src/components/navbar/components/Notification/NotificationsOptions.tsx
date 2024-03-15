import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ViewStyle,
} from 'react-native';
import { spaceBetween, styles, widthOptions } from './Notification.styles';
import {
  NotificationOptionProps,
  OptionNotificationType,
  OptionNotificationItem,
} from '../../Navbar.types';
import {
  DESTRUCTIVE_100,
  INITIAL_100,
  QUATERNARY_10,
  SECONDARY_100,
  SUCCESS_100,
} from '../../../../styles/colors';
import { MinusCircleIcon } from '../../../../assets/images/icons';

const NotificationsOptions = ({
  optionsNotifications,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
  posicionModal,
}: NotificationOptionProps) => {
  const [indexHover, setIndexHover] = useState<number>(-1);

  const getOptionImageType = (type: OptionNotificationType): string => {
    switch (type) {
      case 'warning':
        return SECONDARY_100;
      case 'success':
        return SUCCESS_100;
      case 'error':
        return DESTRUCTIVE_100;
      default:
        return INITIAL_100;
    }
  };

  const getBackground = (index: number): ViewStyle | undefined => {
    if (indexHover === index) {
      return { backgroundColor: QUATERNARY_10 };
    }
  };

  return (
    <>
      <View
        style={[
          styles.optionsContainer,
          {
            top: posicionModal.top + spaceBetween,
            left: posicionModal.left - widthOptions,
          },
        ]}>
        <>
          <View style={styles.optionsContainerTop}>
            <Text style={styles.optionNotificationText}>Notifications</Text>
            <TouchableOpacity onPress={onMarkAllAsReadNotifications}>
              <Text style={styles.optionMarkAllText}>Mark all as read</Text>
            </TouchableOpacity>
          </View>
          {optionsNotifications?.map(
            (optionNotificationItem: OptionNotificationItem, index: number) => {
              return (
                <Pressable
                  onHoverIn={() => {
                    setIndexHover(index);
                  }}
                  onHoverOut={() => {
                    setIndexHover(-1);
                  }}
                  key={index}
                  style={[styles.option, getBackground(index)]}
                  onPress={() =>
                    onOptionSelected(optionNotificationItem, index)
                  }>
                  <View style={styles.optionImage}>
                    <MinusCircleIcon
                      fill={getOptionImageType(optionNotificationItem?.type)}
                      style={styles.optionImageSize}
                    />
                  </View>
                  <View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.optionText}>
                      {optionNotificationItem?.title}
                    </Text>
                    <Text style={styles.optionTimeText}>
                      {optionNotificationItem?.time}
                    </Text>
                  </View>
                </Pressable>
              );
            },
          )}
          <View style={styles.optionViewAllTextContainer}>
            <TouchableOpacity onPress={onViewAllNotifications}>
              <Text style={styles.optionViewAllText}>
                View all notifications
              </Text>
            </TouchableOpacity>
          </View>
        </>
      </View>
    </>
  );
};

export default NotificationsOptions;
