import { StyleSheet } from 'react-native';
import { NEUTRAL_50, NEUTRAL_800, PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: NEUTRAL_800,
  },
  container: {
    backgroundColor: NEUTRAL_50,
    borderRadius: 8,
    borderColor: PRIMARY_100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInput: {
    flex: 1,
  },
  textInput: {
    backgroundColor: NEUTRAL_50,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: -0.16,
    lineHeight:24,
    color: PRIMARY_100,
    flex:1,
    textAlignVertical:'center',
  },
  helperText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.14,
  },
  gridContainer: {
    alignItems: 'center',
    paddingLeft: 12,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
