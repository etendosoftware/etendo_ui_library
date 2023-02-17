import {GestureResponderEvent} from 'react-native';

export interface NavbarProps {
  name?: string;
  email?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  optionsNotifications?: any[];
  anyNotifications?: boolean;
  onOptionSelectedNotifications?: (item: any, index: number) => void;
  onMarkAllAsReadNotifications: (event: GestureResponderEvent) => void;
  onViewAllNotifications: (event: GestureResponderEvent) => void;
}
