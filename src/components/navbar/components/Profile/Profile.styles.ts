import { StyleSheet } from 'react-native';
import {
  NEUTRAL_0,
  NEUTRAL_100,
  NEUTRAL_40,
  NEUTRAL_5,
  NEUTRAL_60,
  OVERLAY,
  PRIMARY_100,
  QUATERNARY_100,
  QUATERNARY_50,
} from '../../../../styles/colors';
import { isTablet } from '../../../../helpers/table_utils';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProfile: {
    height: 48,
    width: 48,
  },
  nameText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '600',
    color: QUATERNARY_100,
    zIndex: 3,
  },
  optionsContainer: {
    position: 'absolute',
    top: 40,
    right: 60,
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    zIndex: 2,
    width: 256,
    overflow: 'hidden',
  },
  option: {
    height: 40,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
  optionLogOut: {
    height: 40,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    borderRadius: 8,
  },
  separator: {
    height: 1,
    backgroundColor: NEUTRAL_5,
  },
  separatorBottom: {
    height: 1,
    backgroundColor: NEUTRAL_5,
    marginHorizontal: 8,
  },
  optionText: {
    fontSize: 12,
    color: NEUTRAL_100,
    marginBottom: 5,
  },
  optionTimeText: {
    fontSize: 12,
    color: NEUTRAL_40,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: OVERLAY,
  },
  roundImage: {
    borderRadius: 50,
    backgroundColor: QUATERNARY_50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
  },
  optionsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 64,
    paddingLeft: 16,
  },
  optionsHeaderTextContainer: {
    marginLeft: 8,
  },
  optionsHeaderTextName: {
    color: PRIMARY_100,
    fontWeight: '600',
    fontSize: 14,
    width: 180,
  },
  optionsHeaderTextEmail: {
    color: NEUTRAL_60,
    fontWeight: '500',
    fontSize: 12,
    width: 180,
  },
  optionsItemsText: {
    color: PRIMARY_100,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    verticalAlign: 'middle',
    width: 180,
  },
  optionItemContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  optionItemImageSize: {
    height: 16,
    width: 16,
  },
  optionItemImage: {
    marginRight: 10,
    height: 16,
    width: 16,
  },
  optionsMapContainer: {},

  scroll: {
    maxHeight: 282,
    marginHorizontal: 8,
  },
  scrollBottom: {
    maxHeight: 282,
    marginHorizontal: 8,
  },
});

export const separatorPopUp = 5;
