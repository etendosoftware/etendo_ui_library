import { CardsMetadata } from '../../Cards.types';

export interface CardProps {
  item: any;
  index: number;
  metadata: CardsMetadata[];
  maxRows?: number;
  maxTitles?: number;
  disabled?: boolean;
  isSelected?: boolean;
  onPress?: (primary: string, index: number) => void;
  onChange?: (newValue: unknown, oldValue: unknown, index: number) => void;
  onCardLayout?: (index: number, y: number) => void;
  onLongPress?: (id: any, index: number) => void;
}
