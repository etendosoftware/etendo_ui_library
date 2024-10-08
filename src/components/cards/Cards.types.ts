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
  onDeleteData?: (...params: any[]) => void;
  titleModal?: string;
  onFetchData?: (currentPage: number, pageSize?: number) => Promise<any[]>;
  subtitleModal?: string;
  labelActionButtonModal?: string;
  labelCloseButtonModal?: string;
  selectionLabel?: string;
  cancelSelectionLabel?: string;
  isSelectionMode?: boolean;
  isResetFetching?: boolean;
  maxTitles?:number;
  maxRows?:number;
}
