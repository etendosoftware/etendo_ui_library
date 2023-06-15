import {TouchableOpacity, Modal} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from './Profile.styles';
import ProfileOptions from './ProfileOptions';
import ProfileImage from './ProfileImage';
import {PosicionModalType, ProfileProps} from '../../Navbar.types';

const Profile = ({
  profileImage,
  name,
  email,
  data,
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

  const handleOptionSelected = (route: string, index: number) => {
    onOptionSelected(route, index);
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
        }}
      >
        <ProfileImage image={profileImage} name={name} />
      </TouchableOpacity>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setShowOptions(false)}
          activeOpacity={1}
        >
          <ProfileOptions
            data={data}
            posicionModal={posicionModal}
            profileImage={profileImage}
            name={name}
            email={email}
            onOptionSelected={handleOptionSelected}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Profile;
