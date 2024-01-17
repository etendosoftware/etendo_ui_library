import React from 'react';
import { Text, ScrollView } from 'react-native';
import { TextMessageProps } from './TextMessage.types';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from './CodeComponent';
import { AnchorComponent } from './AnchorComponent';
import { getTextColorByType } from './TextMessage.utils';
import { styles } from './MarkdownUtils.styles';

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