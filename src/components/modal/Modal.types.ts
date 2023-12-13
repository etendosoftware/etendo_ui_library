import { ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface IModalProps {
  buttons?: ReactNode[];
  children?: ReactNode;
  disableTapOutside?: boolean;
  fullScreen?: boolean;
  handleAction?: any;
  imageHeader?: ReactNode;
  labelCloseButton: string;
  labelActionButton?: string;
  setVisible: any;
  styles?: ViewStyle;
  subtitle?: string;
  title: string;
  visible: boolean;
}
