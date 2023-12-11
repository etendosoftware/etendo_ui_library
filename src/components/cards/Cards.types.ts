import { ColorValue, DimensionValue } from 'react-native';
import { Metadata } from '../../types/table.types';

export interface CardsProps {
  data: any[];
  metadata: Metadata[];
  title?: string;
  cardsHeight?: DimensionValue;
  onPressCard?: (primary: string) => void;
  isLoading?: boolean;
  textEmptyTable?: string;
  commentEmptyTable?: string;
  onLoadMoreData?: (currentPage?: number, pageSize?: number) => void;
  currentPage?: number;
  isLoadingMoreData?: boolean;
  onAddNewData?: () => void;
  backgroundColor?: ColorValue;
  pageSize?: number;
}
