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
import React, {useState} from 'react';
import {styles} from '../Input.style';
import {InputOptionsProps} from '../Input.types';
import {SearchIcon} from '../../../assets/images/icons/SearchIcon';
import { NEUTRAL_40, QUATERNARY_10 } from '../../../styles/colors';

const InputOptions = ({
  data,
  onOptionSelected,
  showOptions,
  positionModal,
  onClose,
  filterValue,
  onChangeFilterText,
  displayKey,
}: InputOptionsProps) => {
  const [showSearchImg, setShowSearchImg] = useState<boolean>(true);
  const [placeholderText, setPlaceholderText] = useState<string>('Search');
  const [indexHover, setIndexHover] = useState<number>(-1);

  const handleOptionSelected = (item: any, index: number) => {
    if(onOptionSelected){
      onOptionSelected(item, index);
    }
    onClose();
  };


  const handleOnBlur = () => {
    setShowSearchImg(true);
    setPlaceholderText('Search');
  };

  const handleOnFocus = () => {
    setShowSearchImg(false);
    setPlaceholderText('');
  };

  const handlePressOverlay = () => {
    onClose();
    setPlaceholderText('Search');
    setShowSearchImg(true);
  };

  const getBackground = (index: number): ViewStyle | undefined => {
    if (indexHover === index) {
      return {backgroundColor: QUATERNARY_10};
    }
  };

  const addRadius = (add: boolean): ViewStyle => {
    if (add) {
      return {borderBottomLeftRadius: 5, borderBottomRightRadius: 5};
    }
    return {};
  };
  const removePadding = (remove: boolean) => {
    if (remove) {
      return {};
    }
    return {paddingHorizontal: 0};
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
              top: positionModal.top + 5,
              left: positionModal.left,
            },
          ]}
        >
          <View
            style={[
              styles.optionFilterContainer,
              removePadding(!filterValue && showSearchImg),
            ]}
          >
            {!filterValue && showSearchImg && (
              <SearchIcon style={styles.optionFilterImg} />
            )}
            <TextInput
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              style={styles.optionFilterText}
              value={filterValue}
              onChangeText={onChangeFilterText}
              placeholder={placeholderText}
              placeholderTextColor={NEUTRAL_40}
            />
          </View>
          <ScrollView
            style={styles.optionsItemsContainer}
            showsVerticalScrollIndicator={false}
          >
            {data?.map((item: any, index: number) => {
              return (
                <Pressable
                  onHoverIn={() => {
                    setIndexHover(index);
                  }}
                  onHoverOut={() => {
                    setIndexHover(-1);
                  }}
                  key={index}
                  style={[
                    styles.optionContainer,
                    getBackground(index),
                    addRadius(index === data.length - 1),
                  ]}
                  onPress={() => handleOptionSelected(item, index)}
                >
                  {displayKey && (
                    <Text style={styles.optionText}>{item[displayKey]}</Text>
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
