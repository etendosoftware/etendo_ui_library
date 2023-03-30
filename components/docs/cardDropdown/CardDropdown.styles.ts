import {StyleSheet} from 'react-native';
import {
  BLUE,
  GREY_10,
  GREY_BLUE,
  PURPLE_50,
  WHITE,
} from '../../../styles/colors';
import {CardStyleVariant} from './CardDropdown.types';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 272,
    height: 168,
    borderRadius: 16,
    padding: 24,
    paddingRight: 23,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardImageContainer: {
    width: 68,
    height: 68,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  cardImageDropDown: {
    width: 12,
    height: 12,
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 22,
  },
  cardDropdownContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  storiesContainer: {},
  cardOptionContainer: {
    width: 272,
    maxHeight: 442,
    minHeight: 168,
    borderRadius: 16,
    overflow: 'hidden',
    display: 'flex',
  },
  cardOptionHeader: {
    height: 52,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },

  cardOptionHeaderSkeletonLeftContainer: {
    flexDirection: 'row',
  },
  cardOptionHeaderTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  cardOptionHeaderImage: {
    height: 20,
    width: 21,
    marginRight: 12,
  },
  cardOptionHeaderUp: {
    height: 12,
    width: 12,
  },
  cardHeaderLeftPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 86,
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  cardOneItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 116,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  cardItemImageContainer: {
    width: 46,
    height: 46,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardItemImageCenter: {
    width: 24,
    height: 24,
    position: 'absolute',
  },
  cardImageCircle: {
    width: 46,
    height: 46,
  },
  cardItemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardItemDescription: {
    fontSize: 14,
    fontWeight: '500',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: -1,
  },
  cardOptionSkeletonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  cardOptionSkeletonRightContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 12,
  },
  cardOptionSeparation: {
    height: 4,
  },
});

export const CardVariant: CardStyleVariant = {
  primary: {
    colorCardContainer: {backgroundColor: WHITE},
    colorCardImageContainer: {backgroundColor: PURPLE_50},
    colorCardTitle: {color: BLUE},
    colorCardOptionContainer: {backgroundColor: WHITE},
    colorCardOptionHeader: {backgroundColor: BLUE},
    colorCardOptionHeaderTitle: {color: WHITE},
    colorCardItemContainer: {borderBottomColor: GREY_10},
    colorCardItemTitle: {color: BLUE},
    colorCardItemDescription: {color: GREY_BLUE},
    colorCardOptionSkeletonContainer: {borderBottomColor: GREY_10},
  },
  secondary: {
    colorCardContainer: {backgroundColor: WHITE},
    colorCardImageContainer: {backgroundColor: PURPLE_50},
    colorCardTitle: {color: BLUE},
    colorCardOptionContainer: {backgroundColor: WHITE},
    colorCardOptionHeader: {backgroundColor: BLUE},
    colorCardOptionHeaderTitle: {color: WHITE},
    colorCardItemContainer: {borderBottomColor: GREY_10},
    colorCardItemTitle: {color: BLUE},
    colorCardItemDescription: {color: GREY_BLUE},
    colorCardOptionSkeletonContainer: {borderBottomColor: GREY_10},
  },
};
