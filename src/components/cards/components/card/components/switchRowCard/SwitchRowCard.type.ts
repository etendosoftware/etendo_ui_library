import { TextStyle } from 'react-native';
import { CardsMetadata } from '../../../../Cards.types';

export interface SwitchRowCardProps {
  row?: CardsMetadata;
  item: any;
  color: TextStyle | undefined;
  margin?: boolean;
  disabled?: boolean;
  onChange?: (key?: string, value?: any) => void;
  debounceDelay?: number;
}
