import {
  GestureResponderEvent,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Input.style';
import {SearchGrey64} from '../../../assets/images/icons';
import {GREY_40} from '../../../styles/colors';

interface InputOptionsProps {
  data: any;
  displayKey?: string;
  onOptionSelected: (item: any, index: number) => void;
  showOptions: boolean;
  posicionModal: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  onClose: (event?: GestureResponderEvent) => void;
  onChangeFilterText: (text: string) => void;
  filterValue: string;
}

const InputOptions = ({
  data,
  onOptionSelected,
  showOptions,
  posicionModal,
  onClose,
  filterValue,
  onChangeFilterText,
  displayKey,
}: InputOptionsProps) => {
  const [showSearchImg, setShowSearchImg] = useState<boolean>(true);
  const [placeholderText, setPlaceholderText] = useState<string>('Search');

  const handleOptionSelected = (item: any, index: number) => {
    onOptionSelected(item, index);
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
              width: posicionModal.width,
              top: posicionModal.top + 5,
              left: posicionModal.left,
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
              <Image
                style={styles.optionFilterImg}
                source={{uri: SearchGrey64}}
              />
            )}
            <TextInput
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              style={styles.optionFilterText}
              value={filterValue}
              onChangeText={onChangeFilterText}
              placeholder={placeholderText}
              placeholderTextColor={GREY_40}
            />
          </View>
          <ScrollView
            style={styles.optionsItemsContainer}
            showsVerticalScrollIndicator={false}
          >
            {data?.map((item: any, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionContainer,
                    addRadius(index === data.length - 1),
                  ]}
                  onPress={() => handleOptionSelected(item, index)}
                >
                  {displayKey && (
                    <Text style={styles.optionText}>{item[displayKey]}</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default InputOptions;
