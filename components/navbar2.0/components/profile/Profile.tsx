import {Image, TouchableOpacity, View, Text, Modal, ImageProps, ImageSourcePropType} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './Profile.styles';
import { GREY_5, LIGHT_BLUE } from '../../../../styles/colors';
import ProfileOptions from './ProfileOptions';
import ProfileImage from './ProfileImage';
interface ProfileProps{
  source?:ImageSourcePropType, name?:string,email?:string
}

const Profile = ({source,name, email}:ProfileProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
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
      <TouchableOpacity style={styles.container} 
      ref={refComponente} 
      onPress={() => {
          getTopLeft();
          setShowOptions(true);
        }}>
       <ProfileImage source={source} name={name} />
      </TouchableOpacity>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setShowOptions(false)}
          activeOpacity={1}
        >
        <ProfileOptions posicionModal={posicionModal} source={source} name={name} email={email}/>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default Profile;
