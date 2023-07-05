import { View, Text, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { separatorPopUp, styles } from './Profile.styles';
import ProfileImage from './ProfileImage';
import { ProfileOptionsProps } from '../../Navbar.types';
import { PRIMARY_100, QUATERNARY_10 } from '../../../../styles/colors';

const ProfileOptions = ({
  profileImage,
  name,
  email,
  posicionModal,
  profileOptions,
  otherOptions,
  onOptionSelected,
}: ProfileOptionsProps) => {
  const defaultNameValue = 'User';
  const scrollRef = React.useRef<ScrollView>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [logoutOption, setLogoutOption] = useState<boolean>(false);
  const [profileOptionIndex, setProfileOptionIndex] = useState<
    number | undefined
  >(-1);
  const [otherOptionIndex, setOtherOptionIndex] = useState<number | undefined>(
    -1,
  );

  const handleProfileOptionSelected = (item?: string, index?: number) => {
    setProfileOptionIndex(index);
    setTimeout(() => {
      if (onOptionSelected) {
        onOptionSelected(item, index);
      }
    }, 100);
  };
  const handleOtherOptionsSelected = (item?: string, index?: number) => {
    setOtherOptionIndex(index);
    setTimeout(() => {
      if (onOptionSelected) {
        onOptionSelected(item, index);
      }
    }, 100);
  };

  const handleLogoutOptionsSelected = () => {
    setLogoutOption(true);
    setTimeout(() => {
      if (onOptionSelected) {
        onOptionSelected('logout', 0);
      }
    }, 100);
  };

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    const containerHeight = styles.scroll.maxHeight;
    setIsScrollable(contentHeight > containerHeight);
  };

  return (
    <View
      style={[
        styles.optionsContainer,
        {
          top: separatorPopUp + posicionModal.top,
          left:
            posicionModal.left -
            styles.optionsContainer.width +
            (otherOptions?.length
              ? styles.aplicationIcon.width
              : styles.profileImageSize.width),
        },
      ]}>
      <View style={styles.optionsHeaderContainer}>
        <ProfileImage image={profileImage} name={name} />
        <View style={styles.optionsHeaderTextContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.optionsHeaderTextName}>
            {name ?? defaultNameValue}
          </Text>
          {email && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.optionsHeaderTextEmail}>
              {email}
            </Text>
          )}
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator
        persistentScrollbar={true}
        style={[
          styles.scroll,
          isScrollable && { marginRight: 6, paddingRight: 9 },
        ]}
        onContentSizeChange={onContentSizeChange}
        ref={scrollRef}>
        <View style={styles.optionsMapContainer}>
          {profileOptions?.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.option,
                { marginRight: isScrollable ? 0 : 8 },
                profileOptionIndex === index && {
                  backgroundColor: QUATERNARY_10,
                },
              ]}
              onPress={() => handleProfileOptionSelected(item?.route, index)}
              onHoverIn={() => setProfileOptionIndex(index)}
              onHoverOut={() => setProfileOptionIndex(-1)}>
              <View style={styles.optionItemContainer}>
                {item?.image && (
                  <View style={styles.optionItemImage}>
                    {React.cloneElement(item.image, {
                      fill: PRIMARY_100,
                      style: styles.optionItemImageSize,
                    })}
                  </View>
                )}
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.optionsItemsText}>
                  {item?.title}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View>
          {otherOptions?.map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.option,
                { marginRight: isScrollable ? 0 : 8 },
                otherOptionIndex === index && {
                  backgroundColor: QUATERNARY_10,
                },
              ]}
              onPress={() => handleOtherOptionsSelected(item?.route, index)}
              onHoverIn={() => setOtherOptionIndex(index)}
              onHoverOut={() => setOtherOptionIndex(-1)}>
              <View style={styles.optionItemContainer}>
                {item?.image && (
                  <View style={styles.optionItemImage}>
                    {React.cloneElement(item.image, {
                      fill: PRIMARY_100,
                      style: styles.optionItemImageSize,
                    })}
                  </View>
                )}
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.optionsItemsText}>
                  {item?.title}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      {Boolean(profileOptions?.length) ||
        (Boolean(otherOptions?.length) && (
          <View style={styles.separatorLogout}></View>
        ))}
      <Pressable
        onPress={() => handleLogoutOptionsSelected()}
        onHoverIn={() => setLogoutOption(true)}
        onHoverOut={() => setLogoutOption(false)}
        style={[
          styles.optionLogOut,
          logoutOption && { backgroundColor: QUATERNARY_10 },
        ]}>
        <Text style={styles.optionsItemsText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileOptions;
