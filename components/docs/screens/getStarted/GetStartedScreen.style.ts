import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: '#4a4f62',
  },
  description: {color: '#4a4f62', marginBottom: 20},
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    color: '#4a4f62',
  },
  clipboardContainer: {alignItems: 'flex-start'},
  clipboardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    color: '#4a4f62',
  },
  clipboardContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 15,
    paddingBottom: 0,
    paddingRight: 0,
  },
  clipboardText: {
    fontSize: 15,
    color: '#4a4f62',
    letterSpacing: 1,
    width: 400,
  },
  clipboardCopyContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#dddddd',
    padding: 2,
  },
  clipboardCopyText: {
    fontWeight: '600',
    paddingHorizontal: 10,
    color: '#4a4f62',
  },
});
