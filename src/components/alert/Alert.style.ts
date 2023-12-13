import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 344,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 6,
    justifyContent: 'center',
    display: 'flex',
    paddingLeft: 16,
    paddingVertical: 14,
    paddingRight: 4,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '500',
    lineHeight: 20,
    flex: 1,
  },
  closeButton: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    height: 14,
    width: 14,
  },
});
