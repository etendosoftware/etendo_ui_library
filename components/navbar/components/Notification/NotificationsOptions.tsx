import {View, Text, TouchableOpacity, Pressable, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {spaceBetween, styles, widthOptions} from './Notification.styles';
import {PointIcon} from '../../../../assets/images/icons/PointIcon';
import {
  NotificationOptionProps,
  OptionNotificationType,
  OptionNotificationItem,
} from '../../Navbar.types';
import {
  GREEN,
  LIGHT_BLUE,
  PURPLE_10,
  RED,
  YELLOW,
} from '../../../../styles/colors';

const NotificationsOptions = ({
  optionsNotifications,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
  posicionModal,
}: NotificationOptionProps) => {
  const [indexHover, setIndexHover] = useState<number>(-1);

  const getOptionImageType = (type: OptionNotificationType) => {
    if (type === 'warning') {
      return <PointIcon fill={YELLOW} style={styles.optionImageSize} />;
    } else if (type === 'success') {
      return <PointIcon fill={GREEN} style={styles.optionImageSize} />;
    } else if (type === 'error') {
      return <PointIcon fill={RED} style={styles.optionImageSize} />;
    } else {
      return <PointIcon fill={LIGHT_BLUE} style={styles.optionImageSize} />;
    }
  };

  const getBackground = (index: number): ViewStyle | undefined => {
    if (indexHover === index) {
      return {backgroundColor: PURPLE_10};
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
                <Pressable
                  onHoverIn={() => {
                    setIndexHover(index);
                  }}
                  onHoverOut={() => {
                    setIndexHover(-1);
                  }}
                  key={index}
                  style={[styles.option, getBackground(index)]}
                  onPress={() => onOptionSelected(item, index)}
                >
                  <View style={styles.optionImage}>
                    {getOptionImageType(item?.type)}
                  </View>
                  <View>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={styles.optionText}
                    >
                      {item?.title}
                    </Text>
                    <Text style={styles.optionTimeText}>{item?.time}</Text>
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
