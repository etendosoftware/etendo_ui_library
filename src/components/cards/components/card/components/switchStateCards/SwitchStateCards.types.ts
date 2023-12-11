import { DimensionValue } from 'react-native';
import { Metadata } from '../../../../Cards.types';

export interface SwitchStateCardsProps {
  data: Array<any>;
  metadata: Metadata[];
  isLoading?: boolean;
  onPressCard?: (primary: string) => void;
  textEmptyTable?: string;
  commentEmptyTable?: string;
  tableHeight?: DimensionValue;
  isTitle?: boolean;
}
