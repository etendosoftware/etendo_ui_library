import React from 'react';
import { View, Text } from 'react-native';
import {
  DANGER_100,
  DANGER_700,
  DANGER_900,
  NEUTRAL_0,
  NEUTRAL_1000,
  NEUTRAL_200,
} from '../../styles/colors';
import MessageDetailBox from './MessageDetailBox';
import { XCircleFillIcon } from '../../assets/images/icons/XCircleFillIcon';
import { RenderMarkdownText } from './MarkdownUtils';
import { TextMessageProps } from './TextMessage.types';
import { FileIcon } from '../../assets/images/icons/FileIcon';
import { IconInfo } from '../../assets/images/icons';
import { styles } from './TextMessage.styles';

// TextMessage component definition
const TextMessage: React.FC<TextMessageProps> = ({
  title,
  text,
  files,
  context,
  time,
  type,
  backgroundColor,
  fileIcon,
  multipleFilesText,
}) => {
  const IconComponent = fileIcon || FileIcon;

  const messageStyle: any = [
    styles.messageContainer,
    { borderTopLeftRadius: type === 'left-user' || type === 'error' ? 0 : 8 },
    { borderTopRightRadius: type === 'right-user' ? 0 : 8 },
    {
      backgroundColor:
        type === 'error'
          ? DANGER_100
          : type === 'right-user'
            ? NEUTRAL_200
            : backgroundColor || NEUTRAL_0,
    },
    { alignSelf: type === 'right-user' ? 'flex-end' : 'flex-start' },
  ];

  const renderTitle = (
    title: string,
    type: 'left-user' | 'right-user' | 'error' | undefined,
  ) => {
    return (
      <Text
        style={[
          styles.title,
          { color: type == 'error' ? DANGER_900 : NEUTRAL_1000 },
        ]}>
        {title}
      </Text>
    );
  };

  return (
    <View style={messageStyle}>
      {/* Optionally display title if it exists */}
      {title && renderTitle(title, type)}

      {/* If context exists, render the context box */}
      {context && (
        <MessageDetailBox
          Icon={IconInfo}
          detailText={context}
          type={type}
        />
      )}

      {/* If files exist, render the file box */}
      {files && files.length > 0 && (
        <MessageDetailBox
          Icon={IconComponent}
          detailText={
            files.length === 1
              ? files[0].name
              : multipleFilesText!!
          }
          type={type}
        />
      )}

      {/* Container for the error icon and the text */}
      <View style={styles.textContentWithIcon}>
        {type === 'error' && (
          <View style={styles.errorIconContainer}>
            <XCircleFillIcon
              style={{ height: 16, width: 16 }}
              fill={DANGER_700}
            />
          </View>
        )}
        {/* Render the markdown text */}
        <RenderMarkdownText text={text} type={type} />
      </View>

      {/* Optionally display timestamp if it exists, always below the text */}
      {time && (
        <Text
          style={type === 'error' ? styles.errorTimestamp : styles.timestamp}>
          {time}
        </Text>
      )}
    </View>
  );
};

export default TextMessage;
