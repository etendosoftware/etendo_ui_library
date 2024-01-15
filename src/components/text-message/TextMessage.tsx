import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DANGER_100, DANGER_700, DANGER_900, NEUTRAL_0, NEUTRAL_100, NEUTRAL_200, PRIMARY_100, TERTIARY_100, TERTIARY_30, TERTIARY_70 } from '../../styles/colors';
import { ErrorIcon } from '../../assets/images/icons/ErrorIcon';
import { RenderMarkdownText } from './MarkdownUtils';
import { TextMessageProps } from './TextMessage.types';

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
        { backgroundColor: type === 'error' ? DANGER_100 : type === 'right-user' ? NEUTRAL_200 : backgroundColor || NEUTRAL_0 },
        { alignSelf: type === 'right-user' ? 'flex-end' : 'flex-start' }
    ];

    return (
        <View style={messageStyle}>
            {/* Optionally display title if it exists */}
            {title && <Text style={styles.title}>{title}</Text>}

            {/* Optionally display file name if it exists */}
            {file && <Text style={styles.file}>{file}</Text>}

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
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'column',
        marginTop: 12,
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
        color: PRIMARY_100,
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 2,
    },
    file: {
        backgroundColor: TERTIARY_70,
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
