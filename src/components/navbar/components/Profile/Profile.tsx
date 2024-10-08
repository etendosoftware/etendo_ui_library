import { TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from './Profile.styles';
import ProfileOptions from './ProfileOptions';
import ProfileImage from './ProfileImage';
import { PosicionModalType, ProfileProps } from '../../Navbar.types';
import { NEUTRAL_0 } from '../../../../styles/colors';
import { GridIcon } from '../../../../assets/images/icons';

const Profile = ({
  profileImage,
  name,
  email,
  profileOptions,
  otherOptions,
  endOptions,
  onOptionSelected,
  isTablet,
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
        style={[styles.container, { marginRight: isTablet ? 32 : 24 }]}
        ref={refComponente}
        onPress={() => {
          getTopLeft();
          setShowOptions(true);
        }}>
        {otherOptions?.length ? (
          <GridIcon
            style={{ width: isTablet ? 32 : 28, height: isTablet ? 32 : 28 }}
            fill={NEUTRAL_0}
          />
        ) : (
          <ProfileImage
            image={profileImage}
            name={name}
            isTablet={isTablet}
            inOptions={false}
          />
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
            isTablet={isTablet}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Profile;
