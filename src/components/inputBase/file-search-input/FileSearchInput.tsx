import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Animated, Platform, Text, } from 'react-native';
import InputBase from '../InputBase';

// Import styles
import { styles } from './FileSearchInput.styles';
import { SUCCESS_600 } from '../../../styles/colors';

// Import icons
import { CheckCircleIcon } from '../../../assets/images/icons/CheckCircleIcon';
import { ClipboardIcon } from '../../../assets/images/icons/Clipboard';
import { CornerDownRightIcon } from '../../../assets/images/icons/CornerDownRightIcon';
import { DeleteIcon } from '../../../assets/images/icons/DeleteIcon';
import { FileIcon } from '../../../assets/images/icons/FileIcon';

// Import types
import { FileSearchInputProps } from './FileSearchInput.types';
import { IInputButtons } from '../inputBase.types';

// Import DocumentPicker for mobile platforms only
let DocumentPicker: any = null;
if (Platform.OS !== 'web') {
    DocumentPicker = require('react-native-document-picker').default;
}

const FileSearchInput = ({
    onSubmit,
    loadingFile,
    onLoadingFile,
    file,
    setFile,
    ...inputBaseProps
}: FileSearchInputProps) => {
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<any>(null);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const progressSteps = [5, 25, 50, 70, 90];
    let currentStep = 0;

    useEffect(() => {
        if (!loadingFile && progress === 90) {
            completeProgress();
        }
    }, [loadingFile, progress]);

    const completeProgress = () => {
        setProgress(100);
        animateProgress(100);
    };

    // Smoothly animate the progress bar
    const animateProgress = (toValue: any) => {
        Animated.timing(progressAnim, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    // Function to start the file loading process
    const startLoading = (pickedFile: any) => {
        setFile(pickedFile);
        setProgress(progressSteps[0]);
        animateProgress(progressSteps[0]);

        let progressInterval = setInterval(() => {
            if (currentStep < progressSteps.length - 1) {
                currentStep++;
                setProgress(progressSteps[currentStep]);
                animateProgress(progressSteps[currentStep]);
            } else {
                clearInterval(progressInterval);
                if (!loadingFile) {
                    completeProgress();
                }
            }
        }, 1000);
    };

    // Handles file button click - Opens file picker on web and uses DocumentPicker on mobile
    const handleFileButtonClick = async () => {
        if (Platform.OS === 'web') {
            fileInputRef.current.click();
        } else if (Platform.OS === 'android' || Platform.OS === 'ios') {
            if (!DocumentPicker) {
                console.error('DocumentPicker is not available on this platform.');
                return;
            }

            try {
                const response = await DocumentPicker.pick({
                    type: [DocumentPicker.types.allFiles],
                });

                const pickedFile = {
                    name: response[0].name,
                    size: response[0].size,
                    type: response[0].type,
                    uri: response[0].uri,
                };

                startLoading(pickedFile);

                // If an onLoadingFile function is provided, call it
                if (onLoadingFile && typeof onLoadingFile === 'function') {
                    onLoadingFile(pickedFile, () => setFile(pickedFile));
                } else {
                    setFile(pickedFile);
                }
            } catch (err) {
                if (!DocumentPicker.isCancel(err)) {
                    console.error(err);
                }
            }
        }
    };

    // Define the right buttons for the input
    const rightButtons: IInputButtons[] = [
        {
            icon: <ClipboardIcon />,
            onPress: handleFileButtonClick,
        },
        {
            icon: <CornerDownRightIcon />,
            onPress: () => {
                if (onSubmit) {
                    onSubmit(fileInputRef.current);
                }
            },
        },
    ];

    // Handle file selection from the input - Web specific
    const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        startLoading(file);
        if (onLoadingFile && typeof onLoadingFile === 'function') {
            onLoadingFile(file, () => setFile(file));
        } else {
            setFile(file);
        }
    };

    // Function to handle file deletion
    const handleDeleteFile = () => {
        setFile(null);
        setProgress(0);
        animateProgress(0);
    };

    return (
        <View style={styles.container}>
            {/* Display when file is selected */}
            {file && loadingFile ? (
                <View style={styles.fileNameContainer}>
                    <View style={styles.fileNameLeftContainer}>
                        <FileIcon style={styles.fileIcon} />
                        <View style={styles.fileNameLeftContent}>
                            <Text style={styles.fileNameText}>{file.name}</Text>
                            <View style={styles.progressBarBackground}>
                                <Animated.View style={[styles.progressBarFill, {
                                    width: progressAnim.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0%', '100%']
                                    })
                                }]} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleDeleteFile}>
                        <DeleteIcon style={styles.deleteIcon} />
                    </TouchableOpacity>
                </View>
            ) :
                file && (
                    <View style={styles.fileNameContainer}>
                        <View style={styles.fileNameLoadedLeftContainer}>
                            <FileIcon style={styles.fileIcon} />
                            <Text style={styles.fileNameText}>{file.name}</Text>
                        </View>
                        <View style={styles.fileNameRightContainer}>
                            <CheckCircleIcon style={styles.checkCircleIcon} fill={SUCCESS_600} />
                            <TouchableOpacity onPress={handleDeleteFile}>
                                <DeleteIcon style={styles.deleteIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}

            {/* Input base with right buttons */}
            <View style={styles.inputContainer}>
                <InputBase
                    {...inputBaseProps}
                    rightButtons={rightButtons}
                />
                {/* Input for web file selection */}
                {Platform.OS === 'web' && (
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                    />
                )}
            </View>
        </View>
    );
};

export default FileSearchInput;
