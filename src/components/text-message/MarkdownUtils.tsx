import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Platform, Clipboard, Linking, ImageStyle } from 'react-native';
import { Prism as WebSyntaxHighlighter } from "react-syntax-highlighter";
import { DANGER_900, INITIAL_100, NEUTRAL_0, NEUTRAL_100, PRIMARY_100, PRIMARY_20, SECONDARY_30, TERTIARY_100, TERTIARY_70 } from '../../styles/colors';
import { CopyIcon } from '../../assets/images/icons/CopyIcon';
import { TextMessageProps } from './TextMessage.types';

// @ts-ignore
import { nightOwl } from 'react-syntax-highlighter/src/styles/prism';
// @ts-ignore
import SyntaxHighlighter from 'react-native-syntax-highlighter';

// Props typing for the HighlightCode component
interface HighlightCodeProps {
    code: string;
    language: string;
}

// Component to display syntax-highlighted code
const HighlightCode: React.FC<HighlightCodeProps> = ({ code, language }) => {
    const [copiedCode, setCopiedCode] = useState(false)
    // Copies the code to the clipboard
    const copyToClipboard = () => {
        setCopiedCode(true);
        Clipboard.setString(code);
    };

    return (
        <View>
            <View style={styles.copyButton}>
                <CopyIcon fill={NEUTRAL_0} style={{ width: 12, height: 12 }} />
                <Text style={styles.copyButtonText} onPress={copyToClipboard}>{copiedCode ? 'Copied text!' : 'Copy code'}</Text>
            </View>
            {Platform.OS === 'web' ? (
                // Web version uses WebSyntaxHighlighter
                <WebSyntaxHighlighter
                    language={language}
                    PreTag="div"
                    customStyle={{
                        borderBottomRightRadius: "0.25rem",
                        borderBottomLeftRadius: "0.25rem",
                        fontSize: "0.75rem",
                        margin: 0
                    }}
                    style={nightOwl}
                >
                    {code}
                </WebSyntaxHighlighter>
            ) : (
                // Mobile version uses SyntaxHighlighter
                <SyntaxHighlighter
                    language={language}
                    wrapLines={true}
                    customStyle={{
                        borderBottomRightRadius: "0.25rem",
                        borderBottomLeftRadius: "0.25rem",
                        fontSize: "0.75rem",
                        margin: 0
                    }}
                    style={nightOwl}
                >
                    {code}
                </SyntaxHighlighter>
            )}
        </View>
    );
};

// Component to render markdown text
export const RenderMarkdownText: React.FC<TextMessageProps> = ({ text, type = 'default' }) => {
    // Define a function to determine text color based on the type
    const textColor = type === 'error' ? DANGER_900 : type === 'right-user' ? TERTIARY_100 : NEUTRAL_100;

    // Regular expressions for markdown patterns
    const boldPattern = /\*\*(.*?)\*\*/g;
    const italicPattern = /\*(.*?)\*/g;
    const codePattern = /```(\w+)\s+([\s\S]*?)```/g;
    const inlineCodePattern = /`([^`]+)`/g;
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

    // Function to render the text with markdown styling
    const renderText = (textPart: string) => {
        const inlineElements: JSX.Element[] = []; // Array to store the Text components

        // Split and apply styles to text in parts
        textPart.split(boldPattern).forEach((subPart, index) => {
            if (textPart.includes(`**${subPart}**`)) {
                inlineElements.push(<Text key={`bold-${index}`} style={styles.boldText}>{subPart}</Text>);
            } else {
                subPart.split(italicPattern).forEach((italicPart, italicIndex) => {
                    if (textPart.includes(`*${italicPart}*`)) {
                        inlineElements.push(<Text key={`italic-${italicIndex}`} style={styles.italicText}>{italicPart}</Text>);
                    } else {
                        italicPart.split(inlineCodePattern).forEach((codePart, codeIndex) => {
                            if (italicPart.includes(`\`${codePart}\``)) {
                                inlineElements.push(<Text key={`inlineCode-${codeIndex}`} style={styles.inlineCode}>{codePart}</Text>);
                            } else {
                                // Here we process the links
                                const partsWithLinks = codePart.split(linkPattern);
                                for (let i = 0; i < partsWithLinks.length; i++) {
                                    const text = partsWithLinks[i];
                                    // If the part is a link text
                                    if ((i % 3) === 1) { // link text
                                        const label = text;
                                        const url = partsWithLinks[i + 1]; // link url
                                        inlineElements.push(
                                            <Text
                                                key={`link-${url}-${i}`}
                                                style={styles.linkText}
                                                onPress={() => Linking.openURL(url)}
                                            >
                                                {label}
                                            </Text>
                                        );
                                        i++; // Skip the next index as it's the URL we just processed
                                    } else {
                                        // Normal text
                                        inlineElements.push(<Text key={`text-${text}-${i}`}>{text}</Text>);
                                    }
                                }
                            }
                        });
                    }
                });
            }
        });

        // Return a Text component that wraps all inline elements
        return (
            <Text style={{ color: textColor }}>
                {inlineElements}
            </Text>
        );;
    };

    const parts = text.split(codePattern);
    let isCodeBlock = false;

    return (
        <ScrollView horizontal={false} style={{ flex: 1 }}>
            {parts.map((part, index) => {
                if (index % 3 === 1) {
                    isCodeBlock = true;
                    const language = part;
                    const code = parts[index + 1];
                    // Render code blocks
                    return (
                        <View style={{ width: '100%' }} key={`code-${index}`}>
                            <HighlightCode code={code} language={language} />
                        </View>
                    );
                } else if (!isCodeBlock) {
                    // Render non-code text
                    return <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} key={`text-${index}`}>{renderText(part)}</View>;
                } else {
                    isCodeBlock = false;
                    return null;
                }
            })}
        </ScrollView>
    );
};

// StyleSheet for the components
const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
    },
    italicText: {
        fontStyle: 'italic',
    },
    copyButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 5,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        backgroundColor: PRIMARY_20,
        gap: 5,
    },
    copyButtonText: {
        color: NEUTRAL_0,
        fontSize: 12,
    },
    inlineCode: {
        backgroundColor: TERTIARY_70,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        color: PRIMARY_100,
        fontWeight: "600",
    },

    linkText: {
        color: INITIAL_100,
        fontWeight: "600",
        textDecorationLine: 'underline',
    },
});

