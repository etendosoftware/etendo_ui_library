import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { INITIAL_100, NEUTRAL_0, NEUTRAL_800, PRIMARY_100, PRIMARY_20, TERTIARY_70 } from '../../styles/colors';
import { TextMessageProps } from './TextMessage.types';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from './CodeComponent';
import { AnchorComponent } from './AnchorComponent';
import { getTextColorByType } from './TextMessage.utils';

const InlineCode = ({ children }: any) => (
    <Text style={styles.inlineCode}>{children}</Text>
);

const Paragraph = ({ children, type, ...props }: any) => {
    return (
        <Text style={[styles.paragraph, { color: getTextColorByType(type) }, props.style]} {...props}>
            {children}
        </Text>
    );
};

// Component to render markdown text
export const RenderMarkdownText: React.FC<TextMessageProps> = ({ text, type = "left-user" }) => {
    return (
        <ScrollView horizontal={false} style={{ flex: 1 }}>
            <ReactMarkdown components={{
                pre: CodeComponent,
                code: InlineCode,
                a: AnchorComponent,
                p: ({ node, ...props }) => <Paragraph {...props} type={type} />,
            }} >
                {text}
            </ReactMarkdown>
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
    linkText: {
        color: INITIAL_100,
        fontWeight: "600",
        textDecorationLine: 'underline',
    },
    inlineCode: {
        backgroundColor: TERTIARY_70,
        paddingHorizontal: 4,
        borderRadius: 4,
        color: PRIMARY_100,
        fontWeight: "700",
    },
    paragraph: {
        margin: 0,
        padding: 0,
        lineHeight: 20,
        color: NEUTRAL_800,
        fontWeight: "500",
    },
    listItem: {
        fontWeight: "700",
    },
});

