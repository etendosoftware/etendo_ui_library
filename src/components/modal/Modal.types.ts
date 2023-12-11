import { ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface IModalProps {
  buttons?: ReactNode[];
  children?: ReactNode;
  disableTapOutside?: boolean;
  fullScreen?: boolean;
  handleSave?: any;
  imageHeader?: ReactNode;
  labelCloseButton: string;
  labelSaveButton?: string;
  setVisible: any;
  styles?: ViewStyle;
  subtitle?: string;
  title: string;
  visible: boolean;
}
