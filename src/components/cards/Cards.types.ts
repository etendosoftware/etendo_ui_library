import { ColorValue, DimensionValue } from 'react-native';
import { Metadata } from '../../types/table.types';

export interface CardsProps {
  backgroundColor?: ColorValue;
  cardsHeight?: DimensionValue;
  commentEmptyCards?: string;
  currentPage?: number;
  data: any[];
  isLoading?: boolean;
  isLoadingMoreData?: boolean;
  metadata: Metadata[];
  onAddNewData?: () => void;
  onDeleteData: (...params: any[]) => void;
  onLoadMoreData?: (currentPage?: number, pageSize?: number) => void;
  onPressCard?: (primary: string) => void;
  pageSize?: number;
  textEmptyCards?: string;
  title?: string;
  titleModal?: string;
  subtitleModal?: string;
  labelActionButtonModal?: string;
  labelCloseButtonModal?: string;
}
