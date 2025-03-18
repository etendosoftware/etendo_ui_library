import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TextMessage.styles';

export interface MessageDetailBoxProps {
    Icon: React.ComponentType<any>;
    detailText: string;
    type?: 'left-user' | 'right-user' | 'error';
}

const MessageDetailBox: React.FC<MessageDetailBoxProps> = ({ Icon, detailText, type }) => {
    return (
        <View
            style={[
                styles.fileContainer,
                type === 'right-user'
                    ? styles.rightUserFileContainer
                    : styles.otherUserFileContainer,
            ]}
        >
            <Icon style={styles.fileIcon} />
            <Text style={styles.file} numberOfLines={1} ellipsizeMode="tail">
                {detailText}
            </Text>
        </View>
    );
};

export default MessageDetailBox;
