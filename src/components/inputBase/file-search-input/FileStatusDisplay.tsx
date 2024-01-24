import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { styles } from './FileSearchInput.styles';
import { DeleteIcon } from '../../../assets/images/icons/DeleteIcon';
import { FileIcon } from '../../../assets/images/icons/FileIcon';
import { FileStatusDisplayProps } from './FileSearchInput.types';

const FileStatusDisplay = ({
    file,
    progressAnim,
    handleDeleteFile,
}: FileStatusDisplayProps) => {
    return (
        <View style={styles.fileNameContainer}>
            <View style={styles.fileNameLeftContainer}>
                <FileIcon style={styles.fileIcon} />
                <View style={styles.fileNameLeftContent}>
                    <Text style={styles.fileNameText}>{file.name}</Text>
                    <View style={styles.progressBarBackground}>
                        <Animated.View
                            style={[
                                styles.progressBarFill,
                                {
                                    width: progressAnim.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0%', '100%'],
                                    }),
                                },
                            ]}
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={handleDeleteFile}>
                <DeleteIcon style={styles.deleteIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default FileStatusDisplay;
