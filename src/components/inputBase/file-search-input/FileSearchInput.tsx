import React, { useState, useRef, ReactNode } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Platform,
  Text,
  SafeAreaView,
} from 'react-native';
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
import FileStatusDisplay from './FileStatusDisplay';
import { Alert, show } from '../../alert';

// Import DocumentPicker for mobile platforms only
let DocumentPicker: any = null;
if (Platform.OS !== 'web') {
  DocumentPicker = require('react-native-document-picker').default;
}


const FileSearchInput = ({
  value,
  placeholder,
  onChangeText,
  onSubmit,
  setFile,
  sendData,
  maxFileSize = 512,
  ...inputBaseProps
}: FileSearchInputProps) => {
  const [file, setLocalFile] = useState<any>(null);
  const [isFileValid, setIsFileValid] = useState<boolean>(false);
  const [loadingFile, setLoadingFile] = useState(false);
  const [progress, setProgress] = useState(0);
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef<any>(null);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const progressSteps = [5, 25, 50, 70, 90];
  let currentStep = 0;

  // Function to reset progress bar
  const resetProgress = () => {
    setProgress(0);
    animateProgress(0);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      startLoading(file);
      setFile(file);
    }
  };

  const completeProgress = () => {
    setProgress(100);
    animateProgress(100);
    setLoadingFile(false);
    setIsFileValid(true);

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
    resetProgress();
    currentStep = 0;
    setLoadingFile(true);
    setFile(pickedFile);
    setLocalFile(pickedFile);

    const lastStepIndex = progressSteps.length - 1;
    let progressInterval = setInterval(() => {
      if (currentStep < lastStepIndex) {
        currentStep++;
        setProgress(progressSteps[currentStep]);
        animateProgress(progressSteps[currentStep]);
      } else {
        clearInterval(progressInterval);
      }
    }, 1000);
  };

  const validateAndLoadFile = (pickedFile: any) => {
    if (maxFileSize && pickedFile.size > maxFileSize * 1024 * 1024) {
      show(`File size should not exceed ${maxFileSize} MB`, 'error');
      setIsFileValid(false);
      setLoadingFile(false);
      setLocalFile(null);
      return false;
    }

    setIsFileValid(true);
    setLoadingFile(true);
    setLocalFile(pickedFile);
    startLoading(pickedFile);
    return true;
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

        const pickedFile: any = {
          name: response[0].name,
          size: response[0].size,
          type: response[0].type,
          uri: response[0].uri,
        };

        validateAndLoadFile(pickedFile);
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
        onSubmit(value, isFileValid ? file : null);
        resetProgress();
        setFile(null);
        setLocalFile(null);
        setIsFileValid(false);
      }
    } else {
      let errorMessage = 'Please wait for the file to finish loading.';
      if (value?.trim() === '') {
        errorMessage = 'Message cannot be empty.';
      } else if (file && !isFileValid) {
        errorMessage = `File size should not exceed ${maxFileSize} MB.`;
      }
      show(errorMessage, 'error');
    }
  };

  // Define the right buttons for the input
  const rightButtons: ReactNode[] = [];
  if (sendData) {
    rightButtons.push(
      <Button
        width={48}
        typeStyle="white"
        onPress={handleFileButtonClick}
        iconLeft={
          <ClipboardIcon style={{ width: 24, height: 24 }} fill={PRIMARY_100} />
        }
      />
    );
  }

  // Handle file selection from the input - Web specific
  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (validateAndLoadFile(file)) {
        startLoading(file);
        setFile(file);
        setLocalFile(file);
        uploadFile(file);
      }
    }
    event.target.value = null;
  };

  // Function to handle file deletion
  const handleDeleteFile = () => {
    resetProgress();
    setFile(null);
    setLocalFile(null);
    setLoadingFile(false);
    setProgress(0);
    animateProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };;

  const uploadFile = async (file: any) => {
    if (!sendData || !sendData.url || !sendData.method) {
      return;
    }
    const formData = new FormData();
    formData.append(sendData.file, file);

    setLoadingFile(true);
    let response;
    try {
      response = await fetch(sendData.url, {
        method: sendData.method,
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        setFile(result);
        setLocalFile(result);
        setLoadingFile(false);
        completeProgress();
      } else {
        throw new Error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      show('Error uploading file', 'error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Alert />
      {/* Display when file is selected */}
      {file && loadingFile && isFileValid ? (
        <FileStatusDisplay
          file={file}
          progressAnim={progressAnim}
          handleDeleteFile={handleDeleteFile}
        />
      ) : (
        file && isFileValid && (
          <View style={styles.fileNameContainer}>
            <View style={styles.fileNameLoadedLeftContainer}>
              <FileIcon style={styles.fileIcon} />
              <Text style={styles.fileNameText}>{file.name}</Text>
            </View>
            <View style={styles.fileNameRightContainer}>
              <CheckCircleIcon
                style={styles.checkCircleIcon}
                fill={SUCCESS_600}
              />
              <TouchableOpacity onPress={handleDeleteFile}>
                <DeleteIcon style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
      {/* Input base with right buttons */}
      <View>
        {Platform.OS === 'web' ? (
          <div ref={dropAreaRef} onDrop={handleDrop}>
            <InputBase
              {...inputBaseProps}
              value={value}
              onChangeText={onChangeText}
              onSubmit={handleSendMessage}
              rightButtons={rightButtons}
              isLoading={loadingFile}
              placeholder={placeholder}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
            />
          </div>
        ) : (
          <InputBase
            {...inputBaseProps}
            value={value}
            onChangeText={onChangeText}
            onSubmit={handleSendMessage}
            rightButtons={rightButtons}
            isLoading={loadingFile}
            placeholder={placeholder}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FileSearchInput;
