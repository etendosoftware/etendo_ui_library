import { CardsMetadata } from '../../Cards.types';

export interface CardProps {
  item: any;
  index: number;
  metadata: CardsMetadata[];
  onPress?: (primary: string) => void;
}
