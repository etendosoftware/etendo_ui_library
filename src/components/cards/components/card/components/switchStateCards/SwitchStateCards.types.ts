import {DimensionValue} from 'react-native';
import {CardsMetadata} from '../../../../Cards.types';

export interface SwitchStateCardsProps {
  data: Array<any>;
  metadata: CardsMetadata[];
  isLoading?: boolean;
  onPressCard?: (primary: string) => void;
  textEmptyCards?: string;
  commentEmptyCards?: string;
  tableHeight?: DimensionValue;
  isTitle?: boolean;
  onHoldCard: (...params: any[]) => void;
  handleItemsSelected: (...params: any[]) => void;
  isSelectionMode: boolean;
  maxRows?: number;
  maxTitles?: number;
}
