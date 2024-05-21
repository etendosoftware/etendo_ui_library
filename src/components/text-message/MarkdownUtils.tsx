import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { TextMessageProps } from './TextMessage.types';
import ReactMarkdown from 'react-markdown';
import { CodeComponent } from './CodeComponent';
import { AnchorComponent } from './AnchorComponent';
import { getTextColorByType } from './TextMessage.utils';
import { styleMarkdown, styles } from './MarkdownUtils.styles';
import { Button } from '../button';
import { ExternalLinkIcon } from '../../assets/images/icons';
import { PRIMARY_100 } from '../../styles/colors';

const InlineCode = ({ children }: any) => (
  <Text style={styles.inlineCode}>{children}</Text>
);

const Paragraph = ({ children, type, ...props }: any) => {
  return (
    <Text
      style={[
        styles.paragraph,
        { color: getTextColorByType(type) },
        props.style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};
const ImageComponent = ({ src, alt, style }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      style={styleMarkdown.imgContainerLink}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          ...styleMarkdown.imgContainer,
          background: isHovered ? PRIMARY_100 : 'transparent',
          boxShadow: isHovered
            ? styleMarkdown.boxShadowActive
            : styleMarkdown.boxShadow,
        }}>
        <img src={src} alt={alt} style={{ ...style, ...styleMarkdown.img }} />
        <div
          onMouseEnter={() => setIsHovered(true)}
          style={{
            ...styleMarkdown.imgButtonContainer,
            opacity: isHovered ? 1 : 0,
            visibility: isHovered ? 'visible' : 'hidden',
          }}>
          <Button typeStyle="primary" iconLeft={<ExternalLinkIcon />} />
        </div>
      </div>
    </a>
  );
};

// Component to render markdown text
export const RenderMarkdownText: React.FC<TextMessageProps> = ({
  text,
  type = 'left-user',
}) => {
  const addLineBreakMarkdown = text.replace(/\n/gi, "&nbsp; \n");
  return (
    <ScrollView horizontal={false} style={{ flex: 1 }}>
      <ReactMarkdown
        components={{
          pre: CodeComponent,
          code: InlineCode,
          a: AnchorComponent,
          p: ({ node, ...props }) => <Paragraph {...props} type={type} />,
          img: ImageComponent,
        }}>
        {addLineBreakMarkdown}
      </ReactMarkdown>
    </ScrollView>
  );
};
