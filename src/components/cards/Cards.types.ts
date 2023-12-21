import { ColorValue, DimensionValue } from 'react-native';
import { Metadata } from '../../interfaces/table.interface';

export interface CardsMetadata extends Metadata {}

export interface CardsProps {
  backgroundColor?: ColorValue;
  cardsHeight?: DimensionValue;
  commentEmptyCards?: string;
  currentPage?: number;
  data: any[];
  isLoading?: boolean;
  isLoadingMoreData?: boolean;
  metadata: CardsMetadata[];
  onAddNewData?: () => void;
  onLoadMoreData?: (currentPage?: number, pageSize?: number) => void;
  onPressCard?: (primary: string) => void;
  pageSize?: number;
  textEmptyCards?: string;
  title?: string;
}
