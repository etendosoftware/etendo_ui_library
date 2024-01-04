import { DimensionValue } from 'react-native';
import { Metadata } from '../../../../../../types/table.types';

export interface SwitchStateCardsProps {
  data: Array<any>;
  metadata: Metadata[];
  isLoading?: boolean;
  onPressCard?: (primary: string) => void;
  textEmptyCards?: string;
  commentEmptyCards?: string;
  tableHeight?: DimensionValue;
  isTitle?: boolean;
  onHoldCard: (...params: any[]) => void;
  handleItemsSelected: (...params: any[]) => void;
  isSelectionMode: boolean;
}
