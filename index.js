import { Platform } from 'react-native';

import * as WebComponents from './dist-web/components';
import * as NativeComponents from './dist-native/components';

import * as NativeIcons from './dist-native/assets/images/icons';
import * as WebIcons from './dist-web/assets/images/icons';

const isNativeEnvironment = Platform.OS === 'ios' || Platform.OS === 'android';

const {
  Button,
  Card,
  Input,
  Navbar,
  Pagination,
  SkeletonItem,
  StatusBar,
  Tab,
  Table,
} = isNativeEnvironment ? NativeComponents : WebComponents;

const {
  AdvanceCalendarIcon,
  ArrowDownIcon,
  ArrowFirstIcon,
  ArrowLastIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BackIcon,
  BellActiveIcon,
  BellIcon,
  BinocularsIcon,
  CalendarIcon,
  CalendarSecundaryIcon,
  CameraIcon,
  CancelIcon,
  ChatIcon,
  CheckFalseIcon,
  CheckIcon,
  CheckTrueIcon,
  CircularArrowIcon,
  ConfigurationIcon,
  DeliveryBoxIcon,
  DocumentIcon,
  EditIcon,
  EditNotesIcon,
  GarbageIcon,
  GoIcon,
  HamburgerIcon,
  HidePasswordIcon,
  HomeIcon,
  ItemsIcon,
  MenuIcon,
  MoneyIcon,
  MoreIcon,
  PencilIcon,
  PointIcon,
  ReportsIcon,
  SearchIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  ShowPasswordIcon,
  SlideShowIcon,
  StarIcon,
  StatisticsIcon,
  TimeIcon,
  TouchIcon,
  TracingIcon,
  TrashIcon,
  UserCardIcon,
  UserIcon,
  UserNoBorderIcon,
  UsersIcon,
  VNoteCardIcon,
  WarningIcon,
  WayIcon,
  WifiIcon,
  WithoutWifiIcon,
} = isNativeEnvironment ? NativeIcons : WebIcons;

export {
  Button,
  Card,
  Input,
  Navbar,
  Pagination,
  SkeletonItem,
  StatusBar,
  Tab,
  Table,
  AdvanceCalendarIcon,
  ArrowDownIcon,
  ArrowFirstIcon,
  ArrowLastIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BackIcon,
  BellActiveIcon,
  BellIcon,
  BinocularsIcon,
  CalendarIcon,
  CalendarSecundaryIcon,
  CameraIcon,
  CancelIcon,
  ChatIcon,
  CheckFalseIcon,
  CheckIcon,
  CheckTrueIcon,
  CircularArrowIcon,
  ConfigurationIcon,
  DeliveryBoxIcon,
  DocumentIcon,
  EditIcon,
  EditNotesIcon,
  GarbageIcon,
  GoIcon,
  HamburgerIcon,
  HidePasswordIcon,
  HomeIcon,
  ItemsIcon,
  MenuIcon,
  MoneyIcon,
  MoreIcon,
  PencilIcon,
  PointIcon,
  ReportsIcon,
  SearchIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  ShowPasswordIcon,
  SlideShowIcon,
  StarIcon,
  StatisticsIcon,
  TimeIcon,
  TouchIcon,
  TracingIcon,
  TrashIcon,
  UserCardIcon,
  UserIcon,
  UserNoBorderIcon,
  UsersIcon,
  VNoteCardIcon,
  WarningIcon,
  WayIcon,
  WifiIcon,
  WithoutWifiIcon,
};
