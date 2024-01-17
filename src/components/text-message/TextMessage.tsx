import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DANGER_100, DANGER_700, DANGER_900, NEUTRAL_0, NEUTRAL_100, NEUTRAL_1000, NEUTRAL_200, NEUTRAL_400, PRIMARY_100, TERTIARY_100, TERTIARY_30, TERTIARY_70 } from '../../styles/colors';
import { ErrorIcon } from '../../assets/images/icons/ErrorIcon';
import { RenderMarkdownText } from './MarkdownUtils';
import { TextMessageProps } from './TextMessage.types';
import { FileIcon } from '../../assets/images/icons/FileIcon';

// TextMessage component definition
const TextMessage: React.FC<TextMessageProps> = ({
    title,
    text,
    file,
    time,
    type,
    backgroundColor,
}) => {
    const messageStyle: any = [
        styles.messageContainer,
        { borderTopLeftRadius: type === 'left-user' || type === 'error' ? 0 : 8 },
        { borderTopRightRadius: type === 'right-user' ? 0 : 8 },
        { backgroundColor: type === 'error' ? DANGER_100 : type === 'right-user' ? NEUTRAL_200 : backgroundColor || NEUTRAL_0 },
        { alignSelf: type === 'right-user' ? 'flex-end' : 'flex-start' }
    ];

    const renderTitle = (title: string, type: 'left-user' | 'right-user' | 'error' | undefined) => {
        return <Text style={[styles.title, { color: type == 'error' ? DANGER_900 : NEUTRAL_1000 }]}>{title}</Text>;
    };

    return (
        <View style={messageStyle}>
            {/* Optionally display title if it exists */}
            {title && renderTitle(title, type)}

            {/* Optionally display file name if it exists */}
            {file &&
                <View style={[
                    styles.fileContainer,
                    type === 'right-user' ? styles.rightUserFileContainer : styles.otherUserFileContainer
                ]}>
                    <FileIcon style={styles.fileIcon} />
                    <Text style={styles.file}>{file}</Text>
                </View>
            }

            {/* Container for the error icon and the text */}
            <View style={styles.textContentWithIcon}>
                {type === 'error' && (
                    <View style={styles.errorIconContainer}>
                        <ErrorIcon style={{ height: 8, width: 8 }} />
                    </View>
                )}
                {/* Render the markdown text */}
                <RenderMarkdownText text={text} type={type} />
            </View>

            {/* Optionally display timestamp if it exists, always below the text */}
            {time && (
                <Text style={type === "error" ? styles.errorTimestamp : styles.timestamp}>
                    {time}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        width: "100%",
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
        fontWeight: "600",
        marginBottom: 2,
    },
    botMessage: {
        backgroundColor: NEUTRAL_0,
        alignSelf: 'flex-start',
        borderTopRightRadius: 8
    },
    userMessageBubble: {
        flexDirection: 'column',
        backgroundColor: TERTIARY_30,
        borderTopLeftRadius: 8
    },
    botMessageBubble: {
        flexDirection: 'column',
    },
    messageBubble: {
        padding: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    fileContainer: {
        marginTop: 2,
        marginBottom: 4,
        padding: 8,
        borderRadius: 8,
        borderColor: NEUTRAL_400,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
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
        fontWeight: "500",
        fontSize: 14,
    },
    defaultTimestamp: {
        color: TERTIARY_100,
        fontSize: 12,
        paddingTop: 4,
        alignSelf: 'flex-end',
    },
    textContentContainer: {
        alignSelf: "flex-end"
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
        color: TERTIARY_100
    },
    botMessageText: {
        color: NEUTRAL_100
    },
    errorMessage: {
        backgroundColor: DANGER_100,
        alignSelf: 'flex-start',
        borderTopRightRadius: 8
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

export default TextMessage;
