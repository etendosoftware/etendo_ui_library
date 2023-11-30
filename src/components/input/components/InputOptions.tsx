import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
  Platform,
  Keyboard,
  KeyboardEvent,
  Dimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../Input.style';
import { InputOptionsProps } from '../Input.types';
import { SearchIcon } from '../../../assets/images/icons/SearchIcon';
import { NEUTRAL_600, QUATERNARY_10 } from '../../../styles/colors';
import { CancelIcon } from '../../../assets/images/icons/CancelIcon';
import { disableOutline } from '../../../helpers/table_utils';

const InputOptions = ({
  data,
  onOptionSelected,
  showOptions,
  positionModal,
  showOptionsAmount,
  onClose,
  filterValue,
  onChangeFilterText,
  displayKey,
  showSearchInPicker,
  placeholderPickerSearch,
  optionsTop,
}: InputOptionsProps) => {
  const [showSearchImg, setShowSearchImg] = useState<boolean>(true);
  const [showScroll, setShowScroll] = useState<boolean>(true);

  const [placeholderText, setPlaceholderText] = useState<string>(
    placeholderPickerSearch ?? '',
  );
  const [indexHover, setIndexHover] = useState<number>(-1);
  const textInputRef = useRef<TextInput>(null);

  const handleOptionSelected = (item: any, index: number) => {
    if (onOptionSelected) {
      onOptionSelected(item, index);
    }
    onClose();
  };

  const handleOnBlur = () => {
    setShowSearchImg(true);
    if (placeholderPickerSearch) {
      setPlaceholderText(placeholderPickerSearch);
    }
  };

  const handleOnFocus = () => {
    setShowSearchImg(false);
    textInputRef?.current?.focus();
    setPlaceholderText('');
  };

  const handlePressOverlay = () => {
    onClose();
    if (placeholderPickerSearch) {
      setPlaceholderText(placeholderPickerSearch);
    }
    setShowSearchImg(true);
  };

  const getBackground = (index: number): ViewStyle | undefined => {
    if (indexHover === index) {
      return { backgroundColor: QUATERNARY_10 };
    }
  };

  const addRadius = (add: boolean): ViewStyle | undefined => {
    if (add) {
      return { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 };
    }
  };
  const removePadding = (remove: boolean): ViewStyle | undefined => {
    if (!remove) {
      return { paddingHorizontal: 0 };
    }
  };
  const addPadding = (add: boolean): ViewStyle | undefined => {
    if (!add) {
      return { paddingHorizontal: 8 };
    }
  };

  const handleCancelFilter = () => {
    onChangeFilterText('');
  };
  const useKeyboard = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
      function onKeyboardDidShow(event: KeyboardEvent) {
        setKeyboardHeight(event.endCoordinates.height);
      }

      function onKeyboardDidHide() {
        setKeyboardHeight(0);
      }

      const showSubscription = Keyboard.addListener(
        'keyboardDidShow',
        onKeyboardDidShow,
      );
      const hideSubscription = Keyboard.addListener(
        'keyboardDidHide',
        onKeyboardDidHide,
      );
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    return keyboardHeight;
  };

  const screenHeight = Dimensions.get('screen').height - useKeyboard();
  const calculatedMaxHeight = showOptionsAmount
    ? 8 + 48 * showOptionsAmount
    : screenHeight;
  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    const containerHeight = calculatedMaxHeight;
    setShowScroll(contentHeight > containerHeight);
  };

  useEffect(() => {
    if (placeholderPickerSearch) {
      setPlaceholderText(placeholderPickerSearch);
    }
  }, [placeholderPickerSearch]);

  const keyboardHeight = useKeyboard();
  const bottomValue = positionModal.bottom || 0;
  const heightValue = positionModal.height || 0;

  const bottomDevices = () => {
    if (Platform.OS === 'web') {
      return bottomValue;
    } else if (keyboardHeight !== 0) {
      return 0;
    } else {
      return bottomValue - heightValue * 2 - keyboardHeight;
    }
  };

  return (
    <Modal transparent={true} visible={showOptions} animationType="fade">
      <TouchableOpacity
        style={styles.optionOverlay}
        onPress={handlePressOverlay}
        activeOpacity={1}
      />
      {optionsTop ? (
        <View
          style={[
            styles.optionsContainer,
            {
              width: positionModal.width,
              left: positionModal.left,
              bottom: bottomDevices(),
              top: keyboardHeight !== 0 || !showOptionsAmount ? 0 : undefined,
            },
          ]}>
          <ScrollView
            style={[
              showScroll && { marginRight: 8 },
              { maxHeight: calculatedMaxHeight },
              styles.scrollOptions,
            ]}
            keyboardShouldPersistTaps="always"
            persistentScrollbar
            showsVerticalScrollIndicator
            indicatorStyle={'black'}
            onContentSizeChange={onContentSizeChange}>
            {data?.map((item: any, index: number) => {
              return (
                <Pressable
                  onHoverIn={() => {
                    setIndexHover(index);
                  }}
                  onHoverOut={() => {
                    setIndexHover(-1);
                  }}
                  onPressIn={() => {
                    setIndexHover(index);
                  }}
                  onPressOut={() => {
                    setIndexHover(-1);
                  }}
                  key={index}
                  style={[
                    styles.optionContainer,
                    0 === index && { marginTop: 0 },
                    getBackground(index),
                    addRadius(index === data?.length - 1),
                  ]}
                  onPress={() => handleOptionSelected(item, index)}>
                  {displayKey && (
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.optionText}>
                      {item[displayKey]}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>
          {showSearchInPicker && (
            <Pressable
              onPress={handleOnFocus}
              style={[
                styles.optionTopFilterContainer,
                removePadding(!filterValue && showSearchImg),
              ]}>
              {filterValue === '' && showSearchImg && (
                <View style={styles.searchContainer}>
                  <SearchIcon
                    style={styles.optionFilterImg}
                    fill={NEUTRAL_600}
                  />
                </View>
              )}
              <TextInput
                ref={textInputRef}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                style={[
                  styles.optionFilterText,
                  addPadding(!filterValue && showSearchImg),
                  disableOutline(),
                ]}
                value={filterValue}
                onChangeText={onChangeFilterText}
                placeholder={placeholderText}
                placeholderTextColor={NEUTRAL_600}
              />
              {filterValue !== '' && (
                <TouchableOpacity
                  style={styles.cancelContainer}
                  onPress={handleCancelFilter}>
                  <CancelIcon style={styles.cancelFilterImg} />
                </TouchableOpacity>
              )}
            </Pressable>
          )}
        </View>
      ) : (
        <View
          style={[
            styles.optionsContainer,
            {
              width: positionModal.width,
              left: positionModal.left,
              top: positionModal.top,
            },
          ]}>
          {showSearchInPicker && (
            <Pressable
              onPress={handleOnFocus}
              style={[
                styles.optionFilterContainer,
                removePadding(!filterValue && showSearchImg),
              ]}>
              {filterValue === '' && showSearchImg && (
                <View style={styles.searchContainer}>
                  <SearchIcon
                    style={styles.optionFilterImg}
                    fill={NEUTRAL_600}
                  />
                </View>
              )}
              <TextInput
                ref={textInputRef}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                style={[
                  styles.optionFilterText,
                  addPadding(!filterValue && showSearchImg),
                  disableOutline(),
                ]}
                value={filterValue}
                onChangeText={onChangeFilterText}
                placeholder={placeholderText}
                placeholderTextColor={NEUTRAL_600}
              />
              {filterValue !== '' && (
                <TouchableOpacity
                  style={styles.cancelContainer}
                  onPress={handleCancelFilter}>
                  <CancelIcon style={styles.cancelFilterImg} />
                </TouchableOpacity>
              )}
            </Pressable>
          )}
          <ScrollView
            style={[
              showScroll && { marginRight: 8 },
              { maxHeight: calculatedMaxHeight },
              styles.scrollOptions,
            ]}
            keyboardShouldPersistTaps="always"
            persistentScrollbar
            showsVerticalScrollIndicator
            indicatorStyle={'black'}
            onContentSizeChange={onContentSizeChange}>
            {data?.map((item: any, index: number) => {
              return (
                <Pressable
                  onHoverIn={() => {
                    setIndexHover(index);
                  }}
                  onHoverOut={() => {
                    setIndexHover(-1);
                  }}
                  onPressIn={() => {
                    setIndexHover(index);
                  }}
                  onPressOut={() => {
                    setIndexHover(-1);
                  }}
                  key={index}
                  style={[
                    styles.optionContainer,
                    0 === index && { marginTop: 0 },
                    getBackground(index),
                    addRadius(index === data?.length - 1),
                  ]}
                  onPress={() => handleOptionSelected(item, index)}>
                  {displayKey && (
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.optionText}>
                      {item[displayKey]}
                    </Text>
                  )}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
    </Modal>
  );
};

export default InputOptions;
