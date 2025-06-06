import { StyleProp, ViewStyle } from 'react-native';
import { MetadataType } from '../types/table.types';

export interface Metadata {
  key?: string;
  label?: string;
  primary?: boolean;
  title?: boolean;
  type?: MetadataType;
  visible?: boolean;
  numberOfLines?: number;
}

export interface CommonTableProps {
  currentPage?: number;
  data?: unknown[];
  isLoading?: boolean;
  isLoadingMoreData?: boolean;
  onLoadMoreData?: (currentPage: number, pageSize: number) => void;
  pageSize?: number;
  title?: string;
  style?: StyleProp<ViewStyle>;
}
