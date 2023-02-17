import {Alert, Dimensions, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Navbar.styles';
import {NavbarProps} from './Navbar.types';
import Welcome from './components/welcome/Welcome';
import Logo from './components/logo/Logo';

import Profile from './components/profile/Profile';
import Notification from './components/notification/Notification';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Navbar = ({name,email,leftComponent, rightComponent,anyNotifications, optionsNotifications,onOptionSelectedNotifications,onViewAllNotifications,onMarkAllAsReadNotifications}: NavbarProps) => {

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Logo onPress={()=>{}}/>
          <Welcome name={name + '!'}/>
          {leftComponent}
        </View>
        <View style={styles.rightContainer}>
          {rightComponent}
          <Notification
           anyNotification={anyNotifications}
           optionsNotifications={optionsNotifications}
           onOptionSelectedNotifications={onOptionSelectedNotifications} 
           onViewAllNotifications={onViewAllNotifications}
           onMarkAllAsReadNotifications={onMarkAllAsReadNotifications}
          />
          <Profile name={name} email={email}/>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
