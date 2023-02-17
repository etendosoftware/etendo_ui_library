import {Image, Modal, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './Notification.styles';
import NotificationsOptions from './NotificationsOptions';

const Notification = ({
  anyNotification,
  optionsNotifications,
  onOptionSelectedNotifications,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
}: any) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleOptionSelected = (item: any, index: number) => {
    onOptionSelectedNotifications(item, index);
    setShowOptions(false);
  };

  const [posicionModal, setPosicionModal] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const refComponente = useRef<TouchableOpacity>(null);

  const getTopLeft = () => {
    if (refComponente.current) {
      refComponente.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          setPosicionModal({top: pageY + height, left: pageX, width, height});
        },
      );
    }
  };
  
  return (
    <>
      <TouchableOpacity
        ref={refComponente}
        style={styles.container}
        onPress={() => {
          setShowOptions(true);
          getTopLeft();
        }}
      >
        {anyNotification ? (
          <Image
            style={styles.imageNotification}
            source={require('../../notifications-active.png')}
          />
        ) : (
          <Image
            style={styles.imageNotification}
            source={require('../../notification.png')}
          />
        )}
      </TouchableOpacity>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setShowOptions(false)}
          activeOpacity={1}
        >
          <NotificationsOptions
            optionsNotifications={optionsNotifications}
            onOptionSelected={handleOptionSelected}
            onViewAllNotifications={() => onViewAllNotifications()}
            onMarkAllAsReadNotifications={() => onMarkAllAsReadNotifications()}
            posicionModal={posicionModal}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Notification;
