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
  selectedIndex?: number | null;
  onPressCard?: (primary: string, index: number) => void;
  onCardLayout?: (index: number, y: number) => void;
  onSelectCard?: (id: any, index: number) => void;
  onChange?: (
    primary?: string,
    itemIndex?: number,
    key?: string,
    value?: any,
  ) => void;
}
