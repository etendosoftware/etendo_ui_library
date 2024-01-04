import { Metadata } from '../../../../types/table.types';

export interface CardProps {
  item: any;
  index: number;
  metadata: Metadata[];
  onPress?: (primary: string) => void;
  onHoldCard: (...params: any[]) => void;
  handleItemsSelected: (...params: any[]) => void;
  isSelectionMode: boolean;
}
