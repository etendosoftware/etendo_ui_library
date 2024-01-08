import { ViewStyle, TextStyle } from 'react-native';
import { CardsMetadata } from '../../../../Cards.types';

export interface SwitchRowCardProps {
  row?: CardsMetadata;
  item: any;
  color: TextStyle | undefined;
  margin?: boolean;
  backgroundColor?: ViewStyle;
}
