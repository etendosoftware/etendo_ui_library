import React from 'react';
import {Story, Meta} from '@storybook/react';
import {View} from 'react-native';
import {styles} from '../navbar/Navbar.styles';
import addMarginContainer from '../../helpers/addMargin';
import Navbar from './Navbar';
import {useState} from '@storybook/addons';
import {NavbarProps} from './Navbar.types';

export default {
  title: 'Etendo/Navbar2.0',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

const notifications = [
  {title: 'Opción 1', time: '12:41 pm', type: 'warning', read: false},
  {title: 'Opción 2', time: '10:00 pm', type: 'success', read: false},
  {title: 'Opción 3', time: '12:00 am', type: 'error', read: false},
  {title: 'Opción 4', time: '05:00 am', type: 'new', read: false},
];
/* Templates */
const Template1: Story<NavbarProps> = ({
  optionsNotifications = notifications,
  ...args
}) => {
  const [optionsNotificationsState, setOptionsNotificationsState] = useState<any>(notifications);

  return (
    <View style={[styles.storiesContainer, addMarginContainer()]}>
      <Navbar
        name='Dana'
        email='dana.scott@etendo.es'
        leftComponent={<></>}
        rightComponent={<></>}
        optionsNotifications={optionsNotificationsState}
        anyNotifications={optionsNotificationsState.length}
        onOptionSelectedNotifications={(item, index) => {
          setOptionsNotificationsState((prev: any) => {
            prev.splice(index, 1);
            return prev;
          });
        }}
        onMarkAllAsReadNotifications={()=>{setOptionsNotificationsState([])}}
        onViewAllNotifications={() => {
          console.log('onViewAllNotifications');
        }}
      />
    </View>
  );
};

/* Stories exports */
export const NavbarVerticalDefault = Template1.bind({});
NavbarVerticalDefault.args = {};
