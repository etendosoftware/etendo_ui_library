import { ColorValue, DimensionValue } from 'react-native';
import { CommonTableProps, Metadata } from '../../interfaces/table.interface';

export interface CardsMetadata extends Metadata {}
export interface CardsProps extends CommonTableProps {
  backgroundColor?: ColorValue;
  cardsHeight?: DimensionValue;
  commentEmptyCards?: string;
  metadata: CardsMetadata[];
  onAddNewData?: () => void;
  onPressCard?: (primary: string) => void;
  textEmptyCards?: string;
}
