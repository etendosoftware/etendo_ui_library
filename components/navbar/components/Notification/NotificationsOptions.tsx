import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {spaceBetween, styles, widthOptions} from './Notification.styles';
import {PointNotificationYellow64} from '../../../../assets/images/icons/base64/point-notification-yellow-64';
import {PointNotificationGreen64} from '../../../../assets/images/icons/base64/point-notification-green-64';
import {PointNotificationRed64} from '../../../../assets/images/icons/base64/point-notification-red-64';
import {PointNotificationBlue64} from '../../../../assets/images/icons/base64/point-notification-blue-64';
import {
  NotificationOptionProps,
  OptionNotificationType,
  OptionNotificationItem,
} from '../../Navbar.types';

const NotificationsOptions = ({
  optionsNotifications,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
  posicionModal,
}: NotificationOptionProps) => {
  const getOptionImageType = (type: OptionNotificationType) => {
    if (type === 'warning') {
      return PointNotificationYellow64;
    } else if (type === 'success') {
      return PointNotificationGreen64;
    } else if (type === 'error') {
      return PointNotificationRed64;
    } else {
      return PointNotificationBlue64;
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
        ]}
      >
        <>
          <View style={styles.optionsContainerTop}>
            <Text style={styles.optionNotificationText}>Notifications</Text>
            <TouchableOpacity onPress={onMarkAllAsReadNotifications}>
              <Text style={styles.optionMarkAllText}>Mark all as read</Text>
            </TouchableOpacity>
          </View>
          {optionsNotifications?.map(
            (item: OptionNotificationItem, index: number) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => onOptionSelected(item, index)}
                  >
                    <Image
                      source={{uri: getOptionImageType(item.type)}}
                      style={styles.optionImage}
                    />
                    <View>
                      <Text style={styles.optionText}>{item.title}</Text>
                      <Text style={styles.optionTimeText}>{item.time}</Text>
                    </View>
                  </TouchableOpacity>
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
