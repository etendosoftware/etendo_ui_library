import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  Platform,
} from 'react-native';
import InputBase from '../InputBase';

// Import styles
import { styles } from './FileSearchInput.styles';
import { NEUTRAL_1000, SUCCESS_600 } from '../../../styles/colors';

// Import icons
import { FileIcon } from '../../../assets/images/icons/FileIcon';

// Import types
import { FileSearchInputProps } from './FileSearchInput.types';
import { Button } from '../../button';
import { SkeletonItem } from '../../secondaryComponents';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { RightButtons } from '../InputBase.types';
import { CheckCircleFillIcon, CornerDownRightIcon, PaperclipIcon, XIcon } from '../../../assets/images/icons';
import { AppPlatform } from '../../../helpers/utilsTypes';

// Import DocumentPicker for mobile platforms only
let DocumentPicker: any = null;
if (Platform.OS !== 'web') {
  DocumentPicker = require('react-native-document-picker').default;
}

const POSITION_DOWN_FILE = 55;
const POSITION_UP_FILE = 60;

const FileSearchInput = ({
  value,
  placeholder,
  onChangeText,
  onSubmit,
  setFile,
  onFileUploaded,
  onError,
  uploadConfig,
  token,
  maxFileSize = 512,
  rightButtons,
  isAttachDisable,
  isSendDisable,
  fileIcon,
  multipleFilesText,
  ...inputBaseProps
}: FileSearchInputProps) => {
  const IconComponent = fileIcon || FileIcon;

  // States
  const [progress, setProgress] = useState<number>(0);
  const [files, setFiles] = useState<File[]>([]);
  const [loadingFile, setLoadingFile] = useState<boolean>(false);
  const [isFileValid, setIsFileValid] = useState<boolean>(false);
  const [fileStatus, setFileStatus] = useState<'none' | 'loaded' | 'canceled' | 'error'>('none');

  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });
  const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

  // References
  const refInput = useRef<TextInput>(null);
  const fileInputRef = useRef<any>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Functions
  const resetFileState = useCallback(() => {
    setFiles([]);
    setIsFileValid(false);
    setLoadingFile(false);
    setProgress(0);
    setFileStatus('none');
  }, []);

  const adjustDropdownPosition = useCallback(() => {
    if (refInput.current) {
      refInput.current.measure(
        (x, y, width, height, pageX, pageY) => {
          setModalPosition({
            top: pageY >= POSITION_UP_FILE ? -POSITION_UP_FILE : POSITION_DOWN_FILE,
            left: pageX,
            width: width,
          });
        }
      );
    }
  }, []);

  useEffect(() => {
    adjustDropdownPosition();
    if (isWebPlatform()) {
      const handleScroll = () => adjustDropdownPosition();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [windowHeight, windowWidth, adjustDropdownPosition]);

  const handleSendMessage = () => {
    if (!loadingFile && value.trim() !== '') {
      onSubmit?.(value, isFileValid ? files : []);
      resetFileState();
      setFile?.([]);
    }
  };

  const validateAndLoadFiles: any = useCallback(
    async (pickedFiles: File[]) => {
      resetFileState();
      setFiles(pickedFiles);
      setFile?.(pickedFiles);

      setIsFileValid(true);
      setLoadingFile(true);
      setProgress(25);

      if (uploadConfig) {
        try {
          await uploadFiles(pickedFiles);
        } catch (error) {
          console.error('Error uploading files:', error);
          onError?.(error);
          setFileStatus('error');
          resetFileState();
          return false;
        }
      } else {
        completeProgress();
      }
      return true;
    },
    [uploadConfig, onError, setFile, resetFileState]
  );

  const completeProgress = useCallback(() => {
    setProgress(100);
    setLoadingFile(false);
    setIsFileValid(true);
    setTimeout(() => {
      setFileStatus('loaded');
      setProgress(0);
    }, 100);
  }, []);

  const uploadFiles = useCallback(
    async (pickedFiles: File[]) => {
      if (!uploadConfig) return;

      const headers = { Authorization: `Bearer ${token}` };
      const formData = new FormData();

      pickedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      abortControllerRef.current = new AbortController();
      const { signal } = abortControllerRef.current;

      try {
        const response = await fetch(uploadConfig.url, {
          method: uploadConfig.method,
          body: formData,
          headers,
          signal,
        });

        if (response.ok) {
          completeProgress();
          setFileStatus('loaded');
          const data = await response.json();
          onFileUploaded?.(data);
        } else {
          const errorResponse = await response.json();
          console.error('Error uploading files:', errorResponse);
          onError?.(errorResponse);
          setFileStatus('error');
          resetFileState();
          setFile?.([]);
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          setFileStatus('canceled');
        } else {
          console.error('Error uploading files:', error);
          setFileStatus('error');
        }
        resetFileState();
        setFile?.([]);
      }
    },
    [uploadConfig, token, completeProgress, resetFileState, setFile, onFileUploaded, onError]
  );

  const handleFileButtonClick = useCallback(() => {
    if (isWebPlatform()) {
      fileInputRef.current?.click();
    } else {
      if (!DocumentPicker) {
        console.error('DocumentPicker is not available on this platform.');
        return;
      }

      DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        allowMultiSelection: true,
      })
        .then((responses: any) => {
          const pickedFiles = responses.map((response: any) => ({
            name: response.name,
            size: response.size,
            type: response.type,
            uri: response.uri,
          }));
          validateAndLoadFiles(pickedFiles);
        })
        .catch((error: any) => {
          if (!DocumentPicker.isCancel(error)) {
            console.error(error);
            onError?.(error);
          }
        });
    }
  }, [validateAndLoadFiles, onError]);

  const handleFileSelect = useCallback(
    async (e: any) => {
      const selectedFiles = Array.from(e.target.files) as File[];
      if (selectedFiles.length > 0) {
        await validateAndLoadFiles(selectedFiles);
      }
      e.target.value = null;
    },
    [validateAndLoadFiles]
  );

  const handleCancelFile = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    resetFileState();
    setFileStatus('canceled');
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setFile?.([]);
  }, [resetFileState, setFile]);

  const UploadButton = (
    <Button
      typeStyle="white"
      onPress={handleFileButtonClick}
      disabled={isAttachDisable}
      iconLeft={<PaperclipIcon style={styles.fileIcon} />}
    />
  );

  const SendButton = (
    <Button
      typeStyle="white"
      onPress={handleSendMessage}
      disabled={isSendDisable}
      iconLeft={<CornerDownRightIcon style={styles.fileIcon} />}
    />
  );

  let buttons: RightButtons | undefined = rightButtons;
  if (!!uploadConfig) {
    buttons = buttons ? [...buttons, UploadButton] : [UploadButton];
  }
  if (!!onSubmit) {
    buttons = buttons ? [...buttons, SendButton] : [SendButton];
  }

  return (
    <SafeAreaView style={styles.container}>
      {isWebPlatform() && (
        <input
          ref={fileInputRef}
          type="file"
          multiple
          style={{ display: 'none' }}
          onChange={handleFileSelect}
        />
      )}

      <InputBase
        {...inputBaseProps}
        value={value}
        onChangeText={onChangeText}
        rightButtons={buttons}
        placeholder={placeholder}
        refInput={refInput}
        multiline
        onSubmitEditing={() => {
          handleSendMessage();
        }}
        onKeyPress={(e) => {
          const nativeEvent = e.nativeEvent as any;
          if (nativeEvent.key === 'Enter' && !nativeEvent.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />

      {files.length > 0 && isFileValid && fileStatus !== 'canceled' && (
        <View
          onStartShouldSetResponder={() => true}
          style={[
            styles.fileContainer,
            {
              top:
                Platform.OS === AppPlatform.web
                  ? modalPosition.top
                  : modalPosition.top - POSITION_UP_FILE,
            },
          ]}
        >
          <View style={styles.fileNameContainer}>
            <View style={styles.fileNameLoadedLeftContainer}>
              <View style={styles.fileIconContainer}>
                <View style={styles.iconWrapper}>
                  <IconComponent style={styles.fileIcon} />
                  {files.length > 1 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{files.length}</Text>
                    </View>
                  )}
                </View>
              </View>
              <View style={styles.fileContent}>
                {files.length === 1 ? (
                  <Text style={styles.fileNameText} numberOfLines={1} ellipsizeMode="tail">
                    {files[0]?.name}
                  </Text>
                ) : (
                  <Text style={styles.fileNameText}>
                    {multipleFilesText}
                  </Text>
                )}
                {progress > 0 && (
                  <View style={styles.progressBarContainer}>
                    <SkeletonItem
                      width={`${progress}%`}
                      height={8}
                      color={NEUTRAL_1000}
                      borderRadius={16}
                    />
                  </View>
                )}
              </View>
            </View>
            <View style={styles.fileNameRightContainer}>
              {fileStatus === 'loaded' && (
                <CheckCircleFillIcon style={styles.checkCircleIcon} fill={SUCCESS_600} />
              )}
              <TouchableOpacity style={styles.containerXicon} onPress={handleCancelFile}>
                <XIcon style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FileSearchInput;
