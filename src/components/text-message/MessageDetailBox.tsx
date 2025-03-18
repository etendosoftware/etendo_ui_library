import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './TextMessage.styles';
import { MessageDetailBoxProps } from './MessageDetailBox.types';

const MessageDetailBox: React.FC<MessageDetailBoxProps> = ({
    Icon,
    files,
    multipleFilesText,
    detailText,
    type,
}) => {
    let displayText = '';
    if (files && files.length > 0) {
        displayText = files.length === 1 ? files[0].name : multipleFilesText!!;
    } else if (detailText) {
        displayText = detailText;
    }

    return (
        <View
            style={[
                styles.fileContainer,
                type === 'right-user'
                    ? styles.rightUserFileContainer
                    : styles.otherUserFileContainer,
            ]}
        >
            <View style={styles.fileIconContainer}>
                <View style={styles.iconWrapper}>
                    <Icon style={styles.fileIcon} />
                    {files?.length!! > 1 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{files?.length}</Text>
                        </View>
                    )}
                </View>
            </View>
            <Text style={styles.file} numberOfLines={1} ellipsizeMode="tail">
                {displayText}
            </Text>
        </View>
    );
};

export default MessageDetailBox;
