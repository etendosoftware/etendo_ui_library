import { GestureResponderEvent, LayoutChangeEvent } from 'react-native';

export type RightComponent = {
  component: React.ReactElement;
  inOptions?: OptionProfileItem;
};

export interface NavbarProps {
  name?: string;
  title?: string;
  email?: string;
  rightComponent?: RightComponent[];
  optionsProfile?: OptionProfileItem[];
  profileImage?: React.ReactElement;
  onOptionSelectedProfile?: (item?: string, index?: number) => void;
  onPressLogo?: () => void;
  onPressMenuBurger?: () => void;
}

export interface EtendoLogoProps {
  onPress?: (event: GestureResponderEvent) => void;
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
  onLayout?: (event: LayoutChangeEvent) => void;
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
  image?: React.ReactElement;
  route?: string;
};

export interface ProfileProps {
  profileImage?: React.ReactElement;
  name?: string;
  email?: string;
  profileOptions?: OptionProfileItem[];
  otherOptions?: (OptionProfileItem | undefined)[];
  onOptionSelected?: (item?: string, index?: number) => void;
}

export interface ProfileImageProps {
  image?: React.ReactElement;
  name?: string;
}

export interface ProfileOptionsProps {
  profileImage?: React.ReactElement;
  name?: string;
  email?: string;
  posicionModal: PosicionModalType;
  profileOptions?: OptionProfileItem[];
  otherOptions?: (OptionProfileItem | undefined)[];
  onOptionSelected?: (item?: string, index?: number) => void;
}

export type DrawerCurrentPageType = {
  image?: React.ReactElement;
  label?: string;
};

export type DrawerDataSubMenuType = {
  label?: string;
  route?: string;
};

export type DrawerDataSectionType = {
  image?: React.ReactElement;
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
  content: DrawerDataContentType[];
};

export interface DrawerLateralProps {
  data: DrawerDataType;
  version?: string;
  copyright?: string;
  showDrawer: boolean;
  currentIndex?: DrawerCurrentIndexType;
  onOptionSelected: (
    route?: string,
    currentIndex?: DrawerCurrentIndexType,
  ) => void;
  onCloseDrawer: (event?: GestureResponderEvent) => void;
}
export interface DrawerSectionsContainerType {
  data?: DrawerDataContentType;
  currentIndex?: DrawerCurrentIndexType;
  indexSection: number;
  onOptionSelected: (
    route?: string,
    currentIndex?: DrawerCurrentIndexType,
  ) => void;
}

export interface DrawerLatertalMenuProps {
  data: DrawerDataSectionType;
  currentIndex?: DrawerCurrentIndexType;
  indexSection: number;
  indexSubSection: number;
  onSelectOption: (
    route?: string,
    currentIndex?: DrawerCurrentIndexType,
  ) => void;
}

export interface MenuBurgerProps {
  onPress?: (event: GestureResponderEvent) => void;
}

export type DrawerCurrentIndexType = {
  indexSection: number;
  indexSubSection: number;
  indexSubSectionItem: number;
};

export type OptionArrayType = (OptionProfileItem | undefined)[];
