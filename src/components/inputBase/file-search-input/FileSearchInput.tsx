import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { View, TouchableOpacity, Animated, Platform, Text, Alert, } from 'react-native';
import InputBase from '../InputBase';

// Import styles
import { styles } from './FileSearchInput.styles';
import { PRIMARY_100, SUCCESS_600 } from '../../../styles/colors';

// Import icons
import { CheckCircleIcon } from '../../../assets/images/icons/CheckCircleIcon';
import { ClipboardIcon } from '../../../assets/images/icons/Clipboard';
import { DeleteIcon } from '../../../assets/images/icons/DeleteIcon';
import { FileIcon } from '../../../assets/images/icons/FileIcon';

// Import types
import { FileSearchInputProps } from './FileSearchInput.types';
import { Button } from '../../button';

// Import DocumentPicker for mobile platforms only
let DocumentPicker: any = null;
if (Platform.OS !== 'web') {
    DocumentPicker = require('react-native-document-picker').default;
}

const FileSearchInput = ({
    value,
    onSubmit,
    setLoadingFile,
    loadingFile,
    onLoadingFile,
    file,
    setFile,
    ...inputBaseProps
}: FileSearchInputProps) => {
    const [progress, setProgress] = useState(0);
    const dropAreaRef = useRef(null);
    const fileInputRef = useRef<any>(null);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const progressSteps = [5, 25, 50, 70, 90];
    let currentStep = 0;

    useEffect(() => {
        if (!loadingFile && progress === 90) {
            completeProgress();
        }
    }, [loadingFile, progress]);

    const handleDrop = (event: any) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0]; // Tomar el primer archivo si se sueltan varios
            startLoading(file);
            if (onLoadingFile && typeof onLoadingFile === 'function') {
                onLoadingFile(file, () => setFile(file));
            } else {
                setFile(file);
            }
        }
    };

    const completeProgress = () => {
        setProgress(100);
        animateProgress(100);

        setTimeout(() => {
            setProgress(0);
            animateProgress(0);
        }, 2000);
    };

    const animateProgress = (toValue: any) => {
        Animated.timing(progressAnim, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start();
    };

    const startLoading = (pickedFile: any) => {
        currentStep = 0;
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

    // Disable message sending if a file is loading or if the input text is empty
    const handleSendMessage = () => {
        if (!loadingFile && value?.trim() !== '') {
            if (onSubmit) {
                onSubmit(fileInputRef.current);
                setProgress(0);
                animateProgress(0);
                setLoadingFile(false);
            }
        } else {
            Alert.alert(
                "Message Incomplete",
                "Please wait for the file to finish loading or ensure the message is not empty."
            );
        }
    };


    // Define the right buttons for the input
    const rightButtons: ReactNode[] = [
        <Button
            width={24}
            typeStyle="white"
            onPress={handleFileButtonClick}
            iconLeft={<ClipboardIcon style={{ width: 24, height: 24 }} fill={PRIMARY_100} />}
        />
    ];

    // Handle file selection from the input - Web specific
    const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            startLoading(file);
            if (onLoadingFile && typeof onLoadingFile === 'function') {
                onLoadingFile(file, () => setFile(file));
            } else {
                setFile(file);
            }
        }
        event.target.value = null;
    };

    // Function to handle file deletion
    const handleDeleteFile = () => {
        setFile(null);
        setProgress(0);
        animateProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
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
                {Platform.OS === "web" ?
                    <div
                        ref={dropAreaRef}
                        onDrop={handleDrop}
                    >
                        <InputBase
                            value={value}
                            {...inputBaseProps}
                            onSubmit={handleSendMessage}
                            rightButtons={rightButtons}
                        />
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                        />
                    </div> :
                    <InputBase
                        value={value}
                        {...inputBaseProps}
                        onSubmit={handleSendMessage}
                        rightButtons={rightButtons}
                    />
                }
            </View>
        </View>
    );
};

export default FileSearchInput;
