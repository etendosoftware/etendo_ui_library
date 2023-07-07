import { TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './Profile.styles';
import ProfileOptions from './ProfileOptions';
import ProfileImage from './ProfileImage';
import { PosicionModalType, ProfileProps } from '../../Navbar.types';
import { AplicationsIcon } from '../../../../assets/images/icons/AplicationsIcon';
import { NEUTRAL_0 } from '../../../../styles/colors';

const Profile = ({
  profileImage,
  name,
  email,
  profileOptions,
  otherOptions,
  endOptions,
  onOptionSelected,
}: ProfileProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [posicionModal, setPosicionModal] = useState<PosicionModalType>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const refComponente = useRef<TouchableOpacity>(null);

  useEffect(() => {
    if (showOptions) {
      getTopLeft();
    }
  });

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

  const handleOptionSelected = (route?: string, index?: number) => {
    if (onOptionSelected) {
      onOptionSelected(route, index);
    }
    setShowOptions(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        ref={refComponente}
        onPress={() => {
          getTopLeft();
          setShowOptions(true);
        }}>
        {otherOptions?.length ? (
          <AplicationsIcon style={styles.aplicationIcon} fill={NEUTRAL_0} />
        ) : (
          <ProfileImage image={profileImage} name={name} />
        )}
      </TouchableOpacity>
      <Modal visible={showOptions} animationType="fade" transparent>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setShowOptions(false)}
          activeOpacity={1}>
          <ProfileOptions
            profileOptions={profileOptions}
            otherOptions={otherOptions}
            posicionModal={posicionModal}
            profileImage={profileImage}
            name={name}
            email={email}
            onOptionSelected={handleOptionSelected}
            endOptions={endOptions}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Profile;
