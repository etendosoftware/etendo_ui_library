import { StyleSheet } from 'react-native';
import { NEUTRAL_50, PRIMARY_100, TERTIARY_50 } from '../styles/colors';
import { NEUTRAL_600 } from 'etendo-ui-library/dist-native/styles/colors';

export const styles = StyleSheet.create({
  window: {
    flex: 1,
  },
  windowWeb: {
    width: 'auto',
    height: 'auto',
    padding: '1.5rem',
  },
  windowTablet: {
    width: 900,
    height: 400,
  },
  windowMobile: {
    width: 300,
    height: 400,
  },
  contain: {
    backgroundColor: TERTIARY_50,
    borderRadius: 15,
  },

  circle: {
    marginBottom: 12,
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 50,
  },
  textBold: {
    color: PRIMARY_100,
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 30,
    fontSize: 21,
    marginBottom: 8,
  },
  layoutWeb: {
    paddingHorizontal: 52,
    paddingVertical: 48,
  },
  layoutTablet: {
    paddingHorizontal: 32,
    paddingVertical: 28,
  },
  layoutMobile: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  layout: {
    backgroundColor: NEUTRAL_50,
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  text: {
    color: NEUTRAL_600,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
  },
});
