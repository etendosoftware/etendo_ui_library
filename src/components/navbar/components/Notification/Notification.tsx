import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { BellActiveIcon } from '../../../../assets/images/icons/BellActiveIcon';
import { BellIcon } from '../../../../assets/images/icons/BellIcon';
import { NotificationProps, OptionNotificationItem, PosicionModalType } from '../../Navbar.types';
import NotificationsOptions from './NotificationsOptions';
import { styles } from './Notification.styles';
import { NEUTRAL_0 } from '../../../../styles/colors';

const Notification = ({
  anyNotification,
  data,
  onOptionSelected,
  onViewAllNotifications,
  onMarkAllAsReadNotifications,
}: NotificationProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [posicionModal, setPosicionModal] = useState<PosicionModalType>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const refComponente = useRef<TouchableOpacity>(null);

  const handleOptionSelected = useMemo(
    () => (item: OptionNotificationItem, index: number) => {
      onOptionSelected(item, index);
      setShowOptions(false);
    },
    [onOptionSelected]
  );

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
          setPosicionModal({ top: pageY + height, left: pageX, width, height });
        },
      );
    }
  };

  useEffect(() => {
    if (showOptions) {
      getTopLeft();
    }
  });

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
          <BellActiveIcon style={styles.imageNotification} fill={NEUTRAL_0} />
        ) : (
          <BellIcon style={styles.imageNotification} fill={NEUTRAL_0} />
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