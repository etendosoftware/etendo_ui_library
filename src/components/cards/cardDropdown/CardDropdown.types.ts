import {
  ColorValue,
  LayoutChangeEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type CardDropdownStyleTypeRestricted = 'primary' | 'secondary';
export type CardDropdownStyleType =
  | 'primary'
  | 'secondary'
  | 'disabledPrimary'
  | 'disabledSecondary';

export type CardStyleVariant = Record<
  CardDropdownStyleType,
  {
    colorCardContainer: ViewStyle;
    colorCardImageContainer: TextStyle;
    colorCardTitle: TextStyle;
    colorCardOptionContainer: TextStyle;
    colorCardOptionHeader: ViewStyle;
    colorCardOptionHeaderTitle: TextStyle;
    colorCardItemContainer: ViewStyle;
    colorCardItemTitle: TextStyle;
    colorCardItemDescription: TextStyle;
    colorCardOptionSkeletonContainer: TextStyle;
    colorCardItemImageContainer: ViewStyle;
    colorCardOptionSkeletonItem: ColorValue;
    colorCardOptionSkeletonHeaderItem: ColorValue;
    colorCardArrowImageFill: ColorValue;
    colorCardImageFill: ColorValue;
    colorCardImageOptionFill: ColorValue;
  }
>;

export type PositionModalType = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type CardDropdownData = {
  image?: React.ReactElement;
  title?: string;
  description?: string;
  route?: string;
};

export interface CardDrpopdownProps {
  title?: string;
  image?: React.ReactElement;
  route?: string;
  onPress?: (route?: string) => void;
  dataOptions?: CardDropdownData[];
  disabled?: boolean;
  isDropdown?: boolean;
  styleType?: CardDropdownStyleTypeRestricted;
}

export interface CardDropdownOptionsProps {
  title?: string;
  image?: React.ReactElement;
  data?: CardDropdownData[];
  visible: boolean;
  positionModal: PositionModalType;
  onClose: () => void;
  onPressOption: (route?: string) => void;
  onLayout: (event: LayoutChangeEvent) => void;
  styleType: CardDropdownStyleType;
}
export interface CardDropdownSkeletonProps {
  onClose: () => void;
  styleType: CardDropdownStyleType;
}
