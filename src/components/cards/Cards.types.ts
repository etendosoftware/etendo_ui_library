import { StyleProp, ViewStyle } from 'react-native';
import { Metadata } from '../../interfaces/table.interface';

export interface CustomComponentProps {
  value?: any;
  fieldKey?: string;
  disabled?: boolean;
  onChange?: (key?: string, value?: any) => void;
  label?: string;
  [key: string]: any;
}

export interface CardsMetadata extends Metadata {
  customComponent?: (props: CustomComponentProps) => React.ReactNode;
  customProps?: Record<string, any>;
}

export interface CardsProps {
  data?: unknown[];
  title?: string;
  pageSize?: number;
  commentEmptyCards?: string;
  textEmptyCards?: string;
  isLoading?: boolean;
  metadata: CardsMetadata[];
  iconButton?: React.ReactElement;
  onPressButton?: () => void;
  onPressCard?: (primary: string, index: number) => void;
  onSelectCard?: (primary: string, index: number) => void;
  onFetchData?: (currentPage: number, pageSize?: number) => Promise<any[]>;
  onChange?: (
    primary?: string,
    itemIndex?: number,
    key?: string,
    value?: any,
  ) => void;
  isResetFetching?: boolean;
  maxTitles?: number;
  maxRows?: number;
  styleContainer?: StyleProp<ViewStyle>;
  scrollToIndex?: number;
}
