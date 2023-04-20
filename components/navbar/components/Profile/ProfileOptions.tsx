import {View, Text, Dimensions, Pressable, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {spaceBetween, styles, widthOptions} from './Profile.styles';
import ProfileImage from './ProfileImage';
import {ProfileOptionsProps} from '../../Navbar.types';
import {PRIMARY_100, QUATERNARY_10} from '../../../../styles/colors';

const ProfileOptions = ({
  profileImage,
  name,
  email,
  posicionModal,
  data,
  onOptionSelected,
}: ProfileOptionsProps) => {
  const [indexHover, setIndexHover] = useState(-1);
  const [logOutHover, setLogOutHover] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const isMobile = screenWidth < 320;

  const handleOptionSelected = (item: string, index: number) => {
    onOptionSelected(item, index);
  };

  const getTopLeft = () => {
    if (isMobile) {
      return {right: 20};
    }
    return {left: posicionModal.left - widthOptions + posicionModal.width};
  };

  const getBackground = (index: number): ViewStyle | undefined => {
    if (indexHover === index) {
      return {backgroundColor: QUATERNARY_10};
    }
  };

  const defaultNameValue = 'A';

  return (
    <View
      style={[
        styles.optionsContainer,
        {width: widthOptions},
        {
          top: posicionModal.top + spaceBetween,
        },
        getTopLeft(),
      ]}
    >
      <View style={styles.optionsHeaderContainer}>
        <ProfileImage image={profileImage} name={name} />
        <View style={styles.optionsHeaderTextContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.optionsHeaderTextName}
          >
            {name || defaultNameValue}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.optionsHeaderTextEmail}
          >
            {email || ''}
          </Text>
        </View>
      </View>
      {data?.map((item, index) => (
        <Pressable
          key={index}
          style={[styles.option, getBackground(index)]}
          onPress={() => handleOptionSelected(item.route, index)}
          onHoverIn={() => {
            setIndexHover(index);
          }}
          onHoverOut={() => {
            setIndexHover(-1);
          }}
        >
          <View style={styles.optionItemContainer}>
            <View style={styles.optionItemImage}>
              {item?.image &&
                React.cloneElement(item.image, {
                  fill: PRIMARY_100,
                  style: styles.optionItemImageSize,
                })}
            </View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.optionsItemsText}
            >
              {item?.title}
            </Text>
          </View>
        </Pressable>
      ))}
      <Pressable
        onHoverIn={() => {
          setLogOutHover(true);
        }}
        onHoverOut={() => {
          setLogOutHover(false);
        }}
        style={[styles.optionLogOut, logOutHover && {backgroundColor: QUATERNARY_10}]}
        onPress={() => {
          handleOptionSelected('logout', 0);
        }}
      >
        <View>
          <Text style={styles.optionsItemsText}>Log Out</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ProfileOptions