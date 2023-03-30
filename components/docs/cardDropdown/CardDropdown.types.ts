import {TextStyle, ViewStyle} from 'react-native';

export type CardDropdownStyleType = 'primary' | 'secondary';

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
  }
>;
