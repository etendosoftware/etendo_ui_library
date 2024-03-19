import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  NEUTRAL_400,
  PRIMARY_100,
  TERTIARY_101,
} from '../../../../../styles/colors';
import { SearchInput } from '../../../search-input';
import { Button } from '../../../../button';
import { XIcon } from '../../../../../assets/images/icons';
import { styles } from '../../DropdownInput.styles';
import { IDropdownInputOptions } from '../../DropdownInput.types';

const DropdownInputOptions = ({
  isVisibleDropdown,
  onClose,
  onSelectOption,
  modalPosition,
  windowHeight,
  windowWidth,
  data,
  displayKey,
  value,
  maxVisibleOptions,
  onScroll,
  isLoading,
  isStaticData,
  searchPlaceholder,
  onFilterTextChange,
  noResultsText,
  isModalUp,
  displayMode,
}: IDropdownInputOptions) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [filterText, setFilterText] = useState<string | null>(null);

  const isCenteredModal = displayMode === 'centeredModal';

  useEffect(() => {
    if (!isLoading && filterText !== null) {
      const handler = setTimeout(() => {
        onFilterTextChange(filterText);
      }, 500);

      return () => clearTimeout(handler);
    }
  }, [filterText]);

  useEffect(() => {
    if (isLoading && data?.length) {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  }, [isLoading]);

  useEffect(() => {
    if (
      isVisibleDropdown &&
      data &&
      value &&
      scrollViewRef.current &&
      displayKey
    ) {
      const selectedIndex = data.findIndex(item => item[displayKey] === value);
      if (selectedIndex >= 0) {
        const positionY = selectedIndex * 48;
        setTimeout(() => {
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: positionY, animated: false });
          }
        }, 100);
      }
    }
  }, [isVisibleDropdown]);

  const filterComponent = () => {
    return (
      <View style={styles.searchContainer}>
        <SearchInput
          placeholder={searchPlaceholder}
          value={filterText || ''}
          onChangeText={text => {
            setFilterText(text);
          }}
          isFocusable={false}
          styleContainer={{ borderColor: NEUTRAL_400 }}
          onSubmit={() => {
            onFilterTextChange(filterText || '');
          }}
          rightButtons={
            !!filterText
              ? [
                  <Button
                    typeStyle={'white'}
                    iconLeft={<XIcon />}
                    onPress={() => {
                      setFilterText('');
                    }}
                  />,
                ]
              : []
          }
        />
      </View>
    );
  };

  return (
    <Modal
      transparent={true}
      visible={isVisibleDropdown}
      animationType="fade"
      onRequestClose={() => {
        onClose();
      }}>
      <TouchableOpacity
        style={[
          styles.fullScreenTouchable,
          isCenteredModal && styles.containerNative,
          { width: windowWidth, height: windowHeight },
        ]}
        onPress={() => onClose()}
        activeOpacity={1}>
        <View
          style={[
            styles.optionsContainer,
            {
              maxHeight:
                maxVisibleOptions && data && data?.length <= maxVisibleOptions
                  ? 'auto'
                  : maxVisibleOptions && maxVisibleOptions * 48 + 48 + 16,
            },
            !isCenteredModal && {
              top: modalPosition.top + 8,
              left: modalPosition.left,
            },
            {
              width: modalPosition.width,
            },
          ]}>
          {((!isStaticData && !isModalUp) || isCenteredModal) &&
            filterComponent()}
          <ScrollView
            ref={scrollViewRef}
            scrollEventThrottle={16}
            onScroll={onScroll}>
            {displayKey &&
              data?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={'dropdown' + index}
                    onPress={() => {
                      onSelectOption(item);
                    }}
                    style={[
                      styles.option,
                      !!value &&
                        item[displayKey] === value && {
                          backgroundColor: TERTIARY_101,
                        },
                    ]}>
                    <Text style={styles.optionText}>{item[displayKey]}</Text>
                  </TouchableOpacity>
                );
              })}
            {isLoading && (
              <ActivityIndicator
                size={'small'}
                style={styles.loading}
                color={PRIMARY_100}
              />
            )}
            {!isLoading && !data?.length && (
              <View style={styles.option}>
                <Text style={styles.optionText}>{noResultsText}</Text>
              </View>
            )}
          </ScrollView>
          {!isStaticData && isModalUp && !isCenteredModal && filterComponent()}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DropdownInputOptions;
