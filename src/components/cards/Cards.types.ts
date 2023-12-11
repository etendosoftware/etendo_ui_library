import { ColorValue, DimensionValue } from 'react-native';
export interface CardsRef {
  initData: () => void;
}

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

export type Metadata = {
  primary?: boolean;
  visible?: boolean;
  label?: string;
  key?: string;
  type?: 'number' | 'string' | 'boolean' | 'date';
  width?: DimensionValue;
  title?: boolean;
};
