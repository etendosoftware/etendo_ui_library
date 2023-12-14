import { TextStyle } from 'react-native';
import { Metadata } from '../../../../../../types/table.types';

export interface SwitchRowCardProps {
  row?: Metadata;
  item: any;
  color: TextStyle | undefined;
  margin?: boolean;
}
