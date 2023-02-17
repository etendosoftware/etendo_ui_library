import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {styles} from './Profile.styles';
import {BLUE, GREY_10, GREY_5, GREY_60, LIGHT_BLUE} from '../../../../styles/colors';
import ProfileImage from './ProfileImage';
interface ProfileOptionsProps {
  source?: ImageSourcePropType;
  name?: string;
  email?: string;
  posicionModal:any;
}

const ProfileOptions = ({source, name, email,posicionModal}: ProfileOptionsProps) => {
  return (
    <View style={[styles.optionsContainer,{top:posicionModal.top + 5,left:posicionModal.left - styles.optionsContainer.width + 40}]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: GREY_10,
          padding: 10,

        }}
      >
        <ProfileImage source={source} name={name} />
        <View style={{marginLeft: 10}}>
          <Text style={{color: BLUE, fontWeight: '600', fontSize: 14}}>
            {name ? name : 'A'}
          </Text>
          <Text style={{color: GREY_60, fontWeight: '500', fontSize: 12}}>
            {email ? email : ''}
          </Text>
        </View>
      </View>
      {[{title: 'Profile and settings',source: require('../../../../assets/images/icons/configuration.png')}].map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {}}
          >
            <View style={{flexDirection:'row',padding: 10}}>
              <Image style={{height: 20,width:20,marginRight:10}} source={item.source} />
              <Text style={{color: BLUE, fontWeight: '500', fontSize: 12}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      <View style={{padding: 10}}>
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <View>
          <Text style={{color: BLUE, fontWeight: '500', fontSize: 12}}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileOptions;
