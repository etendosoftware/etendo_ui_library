import {GestureResponderEvent} from 'react-native';

export interface NavbarProps {
  name?: string;
  email?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  optionsProfile?: OptionProfileItem[];
  onOptionSelectedProfile: (item: string, index: number) => void;
  onPressLogo: () => void;
  onPressMenuBurger: () => void;
}

export interface EtendoLogoProps {
  onPress: (event: GestureResponderEvent) => void;
}

export type OptionNotificationType = 'warning' | 'success' | 'error' | 'new';

export type OptionNotificationItem = {
  title: string;
  time: string;
  type: OptionNotificationType;
};

export interface NotificationProps {
  anyNotification?: boolean;
  data?: OptionNotificationItem[];
  onOptionSelected: (item: OptionNotificationItem, index: number) => void;
  onViewAllNotifications: (event: GestureResponderEvent) => void;
  onMarkAllAsReadNotifications: (event: GestureResponderEvent) => void;
}

export type PosicionModalType = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export interface NotificationOptionProps {
  optionsNotifications?: OptionNotificationItem[];
  onOptionSelected: (item: OptionNotificationItem, index: number) => void;
  onViewAllNotifications: (event: GestureResponderEvent) => void;
  onMarkAllAsReadNotifications: (event: GestureResponderEvent) => void;
  posicionModal: PosicionModalType;
}

export type OptionProfileItem = {
  title: string;
  image: string;
  route: string;
};

export interface ProfileProps {
  profileImage?: string;
  name?: string;
  email?: string;
  data?: OptionProfileItem[];
  onOptionSelected: (item: string, index: number) => void;
}

export interface ProfileImageProps {
  image?: string;
  name?: string;
}

export interface ProfileOptionsProps {
  profileImage?: string;
  name?: string;
  email?: string;
  posicionModal: PosicionModalType;
  data?: OptionProfileItem[];
  onOptionSelected: (item: string, index: number) => void;
}

export type DrawerCurrentPageType = {
  image?: string;
  label?: string;
};

export type DrawerDataSubMenuType = {
  label?: string;
  route?: string;
};

export type DrawerDataSectionType = {
  image?: string;
  label?: string;
  route?: string;
  subMenu?: DrawerDataSubMenuType[];
};

export type DrawerDataContentType = {
  sectionType: 'sections';
  titleSection?: string;
  dataSection?: DrawerDataSectionType[];
};

export type DrawerDataType = {
  currentPage: DrawerCurrentPageType;
  content: DrawerDataContentType[];
};

export interface DrawerLateralProps {
  data: DrawerDataType;
  version?: string;
  copyright?: string;
  showDrawer: boolean;
  onOptionSelected: (route?: string) => void;
  onCloseDrawer: (event?: GestureResponderEvent) => void;
}
export interface DrawerSectionsContainerType {
  data?: DrawerDataContentType;
  onOptionSelected: (route?: string) => void;
}

export interface DrawerLatertalMenuProps {
  data: DrawerDataSectionType;
  onSelectOption: (route?: string) => void;
}

export interface MenuBurgerProps {
  onPress: (event: GestureResponderEvent) => void;
}
