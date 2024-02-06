import React, { useState, useRef, ReactNode, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import InputBase from '../InputBase';

// Import styles
import { styles } from './FileSearchInput.styles';
import { NEUTRAL_1000, PRIMARY_100, SUCCESS_600 } from '../../../styles/colors';

// Import icons
import { CheckCircleIcon } from '../../../assets/images/icons/CheckCircleIcon';
import { ClipboardIcon } from '../../../assets/images/icons/Clipboard';
import { DeleteIcon } from '../../../assets/images/icons/DeleteIcon';
import { FileIcon } from '../../../assets/images/icons/FileIcon';

// Import types
import { FileSearchInputProps } from './FileSearchInput.types';
import { Button } from '../../button';
import { SkeletonItem } from '../../secondaryComponents';
import { isWebPlatform } from '../../../helpers/functions_utils';

// Import DocumentPicker for mobile platforms only
let DocumentPicker: any = null;
if (!isWebPlatform()) {
  try {
    import('react-native-document-picker')
      .then((module) => {
        DocumentPicker = module.default;
      })
      .catch(error => {
        console.error('Cannot load DocumentPicker', error);
      });
  } catch (error) {
    console.error('Error importing DocumentPicker', error);
  }
}

const FileSearchInput = ({
  value,
  placeholder,
  onChangeText,
  onSubmit,
  setFile,
  onFileUploaded,
  onError,
  uploadConfig,
  maxFileSize = 512,
  ...inputBaseProps
}: FileSearchInputProps) => {
  // States
  const [progress, setProgress] = useState<number>(0);
  const [file, setLocalFile] = useState<File | null>(null);
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [isFileValid, setIsFileValid] = useState<boolean>(false);
  const [fileStatus, setFileStatus] = useState<'none' | 'loaded' | 'canceled' | 'error'>('none');

  // References
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef<any>(null);
  const abortControllerRef = useRef<any>(null);

  // Function to reset progress bar
  const resetProgress = () => {
    setLocalFile(null);
    setIsFileValid(false);
    setLoadingFile(false);
    setProgress(0);
    setFileStatus("none");
  };

  // Prevent default behavior
  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  // Handles file drop events, typically from drag-and-drop actions
  const handleDrop = (event: any) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const droppedFile = files[0];
      validateAndLoadFile(droppedFile);
      if (!!setFile) setFile(droppedFile);
      setLocalFile(droppedFile);
    }
  };

  // Completes the file loading process, sets progress to 100%, and then resets
  const completeProgress = () => {
    setProgress(100);
    animateProgress(100);
    setLoadingFile(false);
    setIsFileValid(true);

    setTimeout(() => {
      setFileStatus("loaded");
      setProgress(0);
    }, 100);
  };

  // Updates the file loading progress
  const animateProgress = (toValue: number) => {
    setProgress(toValue);
  };

  // Initiates the file loading process by setting the initial progress
  const startLoading = (pickedFile: File) => {
    setLoadingFile(true);
    if (!!setFile) (pickedFile);
    setLocalFile(pickedFile);
    setProgress(25);
    animateProgress(25);
  };

  // Validates the file size and starts the file loading process
  const validateAndLoadFile = async (pickedFile: File) => {
    resetProgress();
    if (!!setFile) setFile(pickedFile);

    setIsFileValid(true);
    startLoading(pickedFile);
    try {
      if (!!uploadFile) await uploadFile(pickedFile);
    } catch (error) {
      console.error('Error uploading file:', error);
      setFileStatus('error');
      onError?.(error);
    }
    return true;
  };

  // Handles file button click - Opens file picker on web and uses DocumentPicker on mobile
  const handleFileButtonClick = async () => {
    if (isWebPlatform()) {
      fileInputRef.current.click();
    } else {
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
      } catch (error) {
        if (!DocumentPicker.isCancel(error)) {
          console.error(error);
          onError?.(error);
        }
      }
    }
  };

  // Handles the sending of the message
  const handleSendMessage = () => {
    if (!loadingFile && value.trim() !== '') {
      onSubmit?.(value, isFileValid ? file : null);
      resetProgress();
      if (!!setFile) setFile(null);
      setLocalFile(null);
      setIsFileValid(false);
    } else {
      let errorMessage = 'Please wait for the file to finish loading.';
      if (value.trim() === '') {
        errorMessage = 'Message cannot be empty.';
      } else if (file && !isFileValid) {
        errorMessage = `File size should not exceed ${maxFileSize} MB.`;
      }
    }
  };

  // Define the right buttons for the input
  const rightButtons: ReactNode[] = [];
  if (!!uploadConfig) {
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
  const handleFileSelect = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (await validateAndLoadFile(file)) {
        if (!!setFile) setFile(file);
        setLocalFile(file);
      }
    }
    event.target.value = null;
  };

  const uploadFile = async (pickedFile: File) => {
    if (!!uploadConfig) {
      const formData = new FormData();
      formData.append("file", pickedFile);

      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;

      try {
        const response = await fetch(uploadConfig.url, {
          method: uploadConfig.method,
          body: formData,
          headers: uploadConfig.headers,
          signal,
        });
        if (response.ok) {
          completeProgress();
          setLoadingFile(false);
          setFileStatus('loaded');
          if (!!onFileUploaded) {
            const data = await response.json();
            onFileUploaded(data);
          }
        } else {
          const errorResponse = await response.json();
          console.error('Error uploading file:', errorResponse);
          onError?.(errorResponse);
          setFileStatus('error');
          resetProgress();
          if (!!setFile) setFile(null);
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.error('File upload cancelled');
          setFileStatus('canceled');
        } else {
          console.error('Error uploading file:', error);
          setFileStatus('error');
        }
        resetProgress();
        if (!!setFile) setFile(null);
      }
    }
  };


  // Function to handle file deletion
  const handleCancelFile = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    resetProgress();
    animateProgress(0);
    if (!!setFile) setFile(null);
    setFileStatus("canceled");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // Initialize reference
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Display when file is selected */}
      {file && isFileValid && fileStatus !== "canceled" && (
        <View style={styles.fileNameContainer}>
          <View style={styles.fileNameLoadedLeftContainer}>

            <FileIcon style={styles.fileIcon} />

            <View style={styles.fileContent}>
              <Text style={styles.fileNameText} numberOfLines={1} ellipsizeMode='tail'>
                {file.name}
              </Text>
              {progress > 0 &&
                <View style={styles.progressBarContainer}>
                  <SkeletonItem width={`${progress}%`} height={8} color={NEUTRAL_1000} borderRadius={16} />
                </View>}
            </View>
          </View>

          <View style={styles.fileNameRightContainer}>
            {fileStatus === 'loaded' && (
              <CheckCircleIcon
                style={styles.checkCircleIcon}
                fill={SUCCESS_600}
              />
            )}
            <TouchableOpacity onPress={handleCancelFile}>
              <DeleteIcon style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* Input base with right buttons */}
      <View>
        {isWebPlatform() ? (
          <div
            ref={dropAreaRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragOver}
            onDragLeave={handleDragOver}
          >
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
