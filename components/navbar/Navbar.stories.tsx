import React from 'react';
import {Story, Meta} from '@storybook/react';
import { View} from 'react-native';
import {styles} from './Navbar.styles';
import addMarginContainer from '../../helpers/addMargin';
import {DrawerLateral, Navbar, Notification} from './index';
import {NavbarProps} from './Navbar.types';
import {drawerData, notificationData, profileData} from './DataNavBar';
import {useState} from '@storybook/addons';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

/* Templates */
const Template1: Story<NavbarProps> = ({...args}) => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataNotification, setDataNotification] = useState<any[]>(notificationData);

  const  OnOptionSelectedotification = (item:any,index:number) => {
    setDataNotification(dataNotification.filter((item, i) => i !== index));
  } 
  return (
    <View style={[styles.storiesContainer, addMarginContainer()]}>
      <Navbar
        name="Dana"
        email="dana.scott@etendo.es"
        leftComponent={<></>}
        rightComponent={
          <>
            <Notification
              data={dataNotification}
              onOptionSelected={OnOptionSelectedotification}
              onViewAllNotifications={() => {console.log('onViewAllNotifications');}}
              onMarkAllAsReadNotifications={()=> setDataNotification([])}
              anyNotification={dataNotification.length > 0}
            />
          </>
        }
        optionsProfile={profileData}
        onOptionSelectedProfile={(item, index) => {
          console.log(item, index);
        }}
        onPressLogo={() => {
          console.log('onPressLogo');
        }}
        onPressMenuBurger={() => {
          setVisibleDrawer(true);
        }}
      />
      <DrawerLateral
        data={drawerData}
        onOptionSelected={route => console.log(route)}
        showDrawer={visibleDrawer}
        onCloseDrawer={() => {
          setVisibleDrawer(false);
        }}
      />
    </View>
  );
};

/* Stories exports */
export const NavbarVerticalDefault = Template1.bind({});
NavbarVerticalDefault.args = {};
