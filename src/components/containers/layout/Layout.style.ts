import { ViewStyle } from 'react-native';
import { paddingVerticalContainer } from '../../../helpers/defaultStyle';

export const defaultStyle: ViewStyle = {
  ...paddingVerticalContainer(),
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
