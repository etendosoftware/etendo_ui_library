import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './Notification.styles';
import {BLUE, GREY_10, GREY_5, LIGHT_BLUE} from '../../../../styles/colors';
import {
  pointNotificationGreen,
  pointNotificationLightBlue,
  pointNotificationRed,
  pointNotificationYellow,
} from '../../../../assets/images/icons';

const NotificationsOptions = ({
  optionsNotifications,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
  posicionModal,
}: any) => {

  const getOptionImageType = (type: any) => {
    if (type === 'warning') {
      return pointNotificationYellow;
    } else if (type === 'success') {
      return pointNotificationGreen;
    } else if (type === 'error') {
      return pointNotificationRed;
    } else {
      return pointNotificationLightBlue;
    }
  };

  return (
    <>
      <View style={[styles.optionsContainer,{top:posicionModal.top + 5,left:posicionModal.left - styles.optionsContainer.width + 25}]}>
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: GREY_10,
              padding: 15,
            }}
          >
            <Text style={{color: BLUE, fontWeight: '600', fontSize: 14}}>
              Notifications
            </Text>
            <TouchableOpacity onPress={() => onMarkAllAsReadNotifications()}>
              <Text style={{color: LIGHT_BLUE, fontSize: 12}}>
                Mark all as read
              </Text>
            </TouchableOpacity>
          </View>
          {optionsNotifications.map((item: any, index: number) => {
            if (!item.read)
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => onOptionSelected(item,index)}
                >
                  <Image
                    source={{uri: getOptionImageType(item.type)}}
                    style={{
                      height: 8,
                      width: 8,
                      marginRight: 10,
                      alignSelf: 'flex-start',
                      marginTop: 10,
                    }}
                  />
                  <View>
                    <Text style={styles.optionText}>{item.title}</Text>
                    <Text style={styles.optionTimeText}>{item.time}</Text>
                  </View>
                </TouchableOpacity>
              );
          })}
          <View style={{padding: 15}}>
            <TouchableOpacity onPress={() => onViewAllNotifications()}>
              <Text style={{color: LIGHT_BLUE, fontSize: 12}}>
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
