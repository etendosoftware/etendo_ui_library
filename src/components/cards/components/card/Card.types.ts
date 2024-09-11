import { CardsMetadata } from '../../Cards.types';

export interface CardProps {
  item: any;
  index: number;
  metadata: CardsMetadata[];
  maxRows?: number;
  maxTitles?: number;
  onPress?: (primary: string) => void;
  onHoldCard: (...params: any[]) => void;
  handleItemsSelected: (...params: any[]) => void;
  isSelectionMode: boolean;
}
