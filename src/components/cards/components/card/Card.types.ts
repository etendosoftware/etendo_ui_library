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
  onChange?: (
    primary?: string,
    itemIndex?: number,
    key?: string,
    value?: any,
  ) => void;
  onCardLayout?: (index: number, y: number) => void;
  onLongPress?: (id: any, index: number) => void;
}
