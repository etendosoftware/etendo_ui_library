import {Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './Notification.styles';
import NotificationsOptions from './NotificationsOptions';
import {
  NotificationProps,
  OptionNotificationItem,
  PosicionModalType,
} from '../../Navbar.types';
import {BellActiveIcon} from '../../../../assets/images/icons/BellActiveIcon';
import {BellIcon} from '../../../../assets/images/icons/BellIcon';
import {WHITE} from '../../../../styles/colors';

const Notification = ({
  anyNotification,
  data,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
}: NotificationProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleOptionSelected = (
    item: OptionNotificationItem,
    index: number,
  ) => {
    onOptionSelected(item, index);
    setShowOptions(false);
  };

  const [posicionModal, setPosicionModal] = useState<PosicionModalType>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const refComponente = useRef<TouchableOpacity>(null);

  useEffect(()=>{
    if(showOptions){
      getTopLeft();
    }
  })

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
          <BellActiveIcon style={styles.imageNotification} fill={WHITE} />
        ) : (
          <BellIcon style={styles.imageNotification} fill={WHITE} />
        )}
      </TouchableOpacity>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setShowOptions(false)}
          activeOpacity={1}
        >
          <NotificationsOptions
            optionsNotifications={data}
            onOptionSelected={handleOptionSelected}
            onViewAllNotifications={onViewAllNotifications}
            onMarkAllAsReadNotifications={onMarkAllAsReadNotifications}
            posicionModal={posicionModal}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Notification;
