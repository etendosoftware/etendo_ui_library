import WebButton from './dist-web/components/button/Button';
import WebCard from './dist-web/components/cards/cardDropdown';
import WebInput from './dist-web/components/input/Input';
import WebNavbar from './dist-web/components/navbar/Navbar';
import WebPagination from './dist-web/components/pagination/Pagination';
import WebSkeletonItem from './dist-web/components/secondaryComponents/SkeletonItem';
import WebStatusBar from './dist-web/components/statusbar/StatusBar';
import WebTab from './dist-web/components/tab/Tab';
import WebTable from './dist-web/components/table/Table';

import NativeButton from './dist-native/components/button/Button';
import NativeCard from './dist-native/components/cards/cardDropdown';
import NativeInput from './dist-native/components/input/Input';
import NativeNavbar from './dist-native/components/navbar/Navbar';
import NativePagination from './dist-native/components/pagination/Pagination';
import NativeSkeletonItem from './dist-native/components/secondaryComponents/SkeletonItem';
import NativeStatusBar from './dist-native/components/statusbar/StatusBar';
import NativeTab from './dist-native/components/tab/Tab';
import NativeTable from './dist-native/components/table/Table';
import { Platform } from 'react-native';

const isNativeEnvironment = Platform.OS === 'ios' || Platform.OS === 'android';

const Button = isNativeEnvironment ? NativeButton : WebButton;
const Card = isNativeEnvironment ? NativeCard : WebCard;
const Input = isNativeEnvironment ? NativeInput : WebInput;
const Navbar = isNativeEnvironment ? NativeNavbar : WebNavbar;
const Pagination = isNativeEnvironment ? NativePagination : WebPagination;
const SkeletonItem = isNativeEnvironment ? NativeSkeletonItem : WebSkeletonItem;
const StatusBar = isNativeEnvironment ? NativeStatusBar : WebStatusBar;
const Tab = isNativeEnvironment ? NativeTab : WebTab;
const Table = isNativeEnvironment ? NativeTable : WebTable;

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
};
