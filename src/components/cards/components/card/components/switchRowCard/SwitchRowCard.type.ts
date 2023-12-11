import { TextStyle } from 'react-native';
import { Metadata } from '../../../../Cards.types';

export interface SwitchRowCardProps {
  row?: Metadata;
  item: any;
  color: TextStyle | undefined;
}
