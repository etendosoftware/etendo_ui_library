import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {spaceBetween, styles, widthOptions} from './Profile.styles';
import ProfileImage from './ProfileImage';
import  {ProfileOptionsProps} from '../../Navbar.types';

const ProfileOptions = ({
  profileImage,
  name,
  email,
  posicionModal,
  data,
  onOptionSelected,
}: ProfileOptionsProps) => {

  const handleOptionSelected = (item: string, index: number) => {
    onOptionSelected(item, index);
  };

  const defaultNameValue = 'A'
  return (
    <View
      style={[
        styles.optionsContainer,
        {
          top: posicionModal.top + spaceBetween,
          left: posicionModal.left - widthOptions,
        },
      ]}
    >
      <View
        style={styles.optionsHeaderContainer}
      >
        <ProfileImage image={profileImage} name={name} />
        <View style={styles.optionsHeaderTextContainer}>
          <Text style={styles.optionsHeaderTextName}>
            {name ? name : defaultNameValue} 
          </Text>
          <Text style={styles.optionsHeaderTextEmail}>
            {email ? email : ''}
          </Text>
        </View>
      </View>
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => handleOptionSelected(item.route, index)}
          >
            <View style={styles.optionItemContainer}>
              <Image
                style={styles.optionItemImage}
                source={{uri: item?.image}}
              />
              <Text style={styles.optionsItemsText}>
                {item?.title}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={styles.optionLogOutContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            handleOptionSelected(
              'loguot',
              0,
            );
          }}
        >
          <View>
            <Text style={styles.optionsItemsText}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileOptions;
