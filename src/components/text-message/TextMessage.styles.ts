import { StyleSheet } from 'react-native';
import {
  DANGER_100,
  DANGER_700,
  DANGER_900,
  NEUTRAL_0,
  NEUTRAL_100,
  NEUTRAL_1000,
  NEUTRAL_200,
  NEUTRAL_400,
  TERTIARY_100,
  TERTIARY_30,
} from '../../styles/colors';

export const styles = StyleSheet.create({
  scrollViewContent: {
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    flexDirection: 'column',
    marginBottom: 12,
    maxWidth: '100%',
  },
  textContentWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  title: {
    color: NEUTRAL_1000,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  botMessage: {
    backgroundColor: NEUTRAL_0,
    alignSelf: 'flex-start',
    borderTopRightRadius: 8,
  },
  userMessageBubble: {
    flexDirection: 'column',
    backgroundColor: TERTIARY_30,
    borderTopLeftRadius: 8,
  },
  botMessageBubble: {
    flexDirection: 'column',
  },
  messageBubble: {
    padding: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fileContainer: {
    marginTop: 2,
    marginBottom: 4,
    padding: 8,
    borderRadius: 8,
    borderColor: NEUTRAL_400,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightUserFileContainer: {
    backgroundColor: NEUTRAL_0,
  },
  otherUserFileContainer: {
    backgroundColor: NEUTRAL_200,
  },
  fileIcon: {
    width: 36,
    height: 36,
  },
  file: {
    paddingHorizontal: 8,
    fontWeight: '500',
    fontSize: 14,
  },
  defaultTimestamp: {
    color: TERTIARY_100,
    fontSize: 12,
    paddingTop: 4,
    alignSelf: 'flex-end',
  },
  textContentContainer: {
    alignSelf: 'flex-end',
  },
  timestampContainer: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
    color: TERTIARY_100,
  },
  messageText: {
    color: TERTIARY_100,
    fontSize: 14,
  },
  userMessageText: {
    color: TERTIARY_100,
  },
  botMessageText: {
    color: NEUTRAL_100,
  },
  errorMessage: {
    backgroundColor: DANGER_100,
    alignSelf: 'flex-start',
    borderTopRightRadius: 8,
  },
  errorMessageText: {
    color: DANGER_900,
  },
  errorIconContainer: {
    width: 16,
    height: 16,
    borderRadius: 12,
    backgroundColor: DANGER_700,
    color: DANGER_900,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  errorTimestamp: {
    color: DANGER_900,
    fontSize: 12,
    paddingTop: 4,
    alignSelf: 'flex-end',
  },
});
