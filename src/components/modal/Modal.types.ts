import { ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface IModalProps {
  buttons?: ReactNode[];
  children?: ReactNode;
  disableTapOutside?: boolean;
  fullScreen?: boolean;
  handleAction?: (...params: any[]) => void;
  imageHeader?: ReactNode;
  labelCloseButton: string;
  labelActionButton?: string;
  showModal: (...params: any[]) => void;
  styles?: ViewStyle;
  subtitle?: string;
  title: string;
  visible: boolean;
}
