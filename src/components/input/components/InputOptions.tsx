import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../Input.style';
import { InputOptionsProps } from '../Input.types';
import { SearchIcon } from '../../../assets/images/icons/SearchIcon';
import { NEUTRAL_600, QUATERNARY_10 } from '../../../styles/colors';
import { CancelIcon } from '../../../assets/images/icons/CancelIcon';

const InputOptions = ({
  data,
  onOptionSelected,
  showOptions,
  positionModal,
  showOptionsAmount = 4,
  onClose,
  filterValue,
  onChangeFilterText,
  displayKey,
  showSearchInPicker,
  placeholderSearch,
}: InputOptionsProps) => {
  const calculatedMaxHeight = 8 + 48 * showOptionsAmount;

  const [showSearchImg, setShowSearchImg] = useState<boolean>(true);
  const [showScroll, setShowScroll] = useState<boolean>(true);

  const [placeholderText, setPlaceholderText] = useState<string>(
    placeholderSearch ?? '',
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
    if (placeholderSearch) {
      setPlaceholderText(placeholderSearch);
    }
  };

  const handleOnFocus = () => {
    setShowSearchImg(false);
    textInputRef?.current?.focus();
    setPlaceholderText('');
  };

  const handlePressOverlay = () => {
    onClose();
    if (placeholderSearch) {
      setPlaceholderText(placeholderSearch);
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

  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    const containerHeight = calculatedMaxHeight;
    setShowScroll(contentHeight > containerHeight);
  };

  return (
    <>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          style={styles.optionOverlay}
          onPress={handlePressOverlay}
          activeOpacity={1}
        />
        <View
          style={[
            styles.optionsContainer,
            {
              width: positionModal.width,
              top: positionModal.top,
              left: positionModal.left,
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
      </Modal>
    </>
  );
};

export default InputOptions;
