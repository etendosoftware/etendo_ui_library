import { TextStyle } from 'react-native';
import { CardsMetadata } from '../../../../Cards.types';

export interface SwitchTitleCardProps {
  row?: CardsMetadata;
  item: any;
  color?: TextStyle;
  isEmptyData?: boolean;
}
