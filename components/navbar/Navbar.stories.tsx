import React from 'react';
import {Story, Meta} from '@storybook/react';
import {View} from 'react-native';
import {styles} from './Navbar.styles';
import addMarginContainer from '../../helpers/addMargin';
import {DrawerLateral, Navbar, Notification} from './index';
import {
  DrawerCurrentIndexType,
  NavbarProps,
  OptionNotificationItem,
} from './Navbar.types';
import {drawerData, notificationData, profileData} from './Navbar.data';
import {useState} from '@storybook/addons';

export default {
  title: 'Etendo/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta<typeof Navbar>;

/* Templates */
const TemplateDefault: Story<NavbarProps> = ({...args}) => {
  return (
    <View style={[styles.storiesContainer, addMarginContainer()]}>
      <Navbar {...args} />
    </View>
  );
};

const TemplateVariant: Story<NavbarProps> = ({...args}) => {
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<
    DrawerCurrentIndexType | undefined
  >({indexSection: -1, indexSubSection: -1, indexSubSectionItem: -1});
  const [dataNotification, setDataNotification] = useState<
    OptionNotificationItem[]
  >(notificationData);

  const OnOptionSelectedotification = (item: any, index: number) => {
    setDataNotification(dataNotification.filter((item, i) => i !== index));
  };
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
              onViewAllNotifications={() => {}}
              onMarkAllAsReadNotifications={() => setDataNotification([])}
              anyNotification={dataNotification.length > 0}
            />
          </>
        }
        optionsProfile={profileData}
        onOptionSelectedProfile={() => {}}
        onPressLogo={() => {}}
        onPressMenuBurger={() => {
          setVisibleDrawer(true);
        }}
      />
      <DrawerLateral
        data={drawerData}
        currentIndex={currentIndex}
        copyright="Copyright @ 2023 Etendo"
        version="1.1.0"
        onOptionSelected={(route, index) => {
          setCurrentIndex(index);
        }}
        showDrawer={visibleDrawer}
        onCloseDrawer={() => {
          setVisibleDrawer(false);
        }}
      />
    </View>
  );
};

/* Stories exports */
export const NavbarVerticalDefault = TemplateDefault.bind({});
export const NavbarVerticalVariant = TemplateVariant.bind({});

NavbarVerticalDefault.args = {
  name: 'Dana',
  email: 'dana.scott@etendo.es',
  leftComponent: <></>,
  rightComponent: <></>,
  optionsProfile: profileData,
  onOptionSelectedProfile: () => {},
  onPressMenuBurger: ()=> {},
  onPressLogo: () => {},
};

NavbarVerticalVariant.args = {};
