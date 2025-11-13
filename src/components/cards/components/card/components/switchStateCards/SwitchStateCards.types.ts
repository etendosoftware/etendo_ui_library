import { CardsMetadata } from '../../../../Cards.types';

export interface SwitchStateCardsProps {
  data?: Array<any>;
  metadata: CardsMetadata[];
  isLoading?: boolean;
  textEmptyCards?: string;
  commentEmptyCards?: string;
  cardsHeight?: number;
  maxRows?: number;
  maxTitles?: number;
  selectedIndices?: Set<number>;
  onPressCard?: (primary: string, index: number) => void;
  onCardLayout?: (index: number, y: number) => void;
  onSelectCard?: (id: any, index: number) => void;
  onChange?: (newValue: unknown, oldValue: unknown, index: number) => void;
}
