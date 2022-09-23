import {TextStyle, ViewStyle} from 'react-native';
import {BLACK, BLACK2, BLUE, BORDER_GREY, GREY} from '../../styles/colors';

export const disabledField: ViewStyle = {
  backgroundColor: GREY,
  borderColor: BORDER_GREY,
  borderWidth: 1,
  borderRadius: 3,
  flexDirection: 'row',
  height: 30,
};

export const enabledField: ViewStyle = {
  borderColor: BLUE,
  borderWidth: 1,
  borderRadius: 3,
  flexDirection: 'row',
  height: 30,
};

export const disabledText: TextStyle = {
  color: BLACK2,
  opacity: 0.6,
  fontSize: 11,
  paddingHorizontal: 15,
  flex: 1,
  textAlignVertical: 'center',
};
export const onlyReadText: TextStyle = {
  color: BLACK2,
  fontSize: 11,
  paddingHorizontal: 15,
  flex: 1,
  textAlignVertical: 'center',
};

export const enabledText: TextStyle = {
  color: BLUE,
  fontSize: 11,
  paddingHorizontal: 15,
  flex: 1,
  textAlignVertical: 'center',
};
