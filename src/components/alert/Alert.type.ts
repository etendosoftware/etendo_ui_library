import { Animated, ViewStyle, StyleProp } from 'react-native';
export type StatusType = 'info' | 'success' | 'error' | 'warning';
export type EmitEventType = 'show' | 'clear';

export type Listener = (data: any) => void;

export interface IMessage {
  message: string;
  type: StatusType;
  duration: number;
}

export interface IListeners {
  [key: string]: Listener[];
}

export interface IAlertMessage {
  style?: StyleProp<ViewStyle>;
  typeMessage: StatusType;
  slideAnim?: Animated.Value;
  opacityAnim?: Animated.Value;
  onPressClose?: () => void;
  message?: string;
}
