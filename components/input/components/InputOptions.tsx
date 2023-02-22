import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';

const InputOptions = ({
  onOptionSelected,
  showOptions,
  posicionModal
}: any) => {

  const handleOptionSelected = (
    item: any,
    index: number,
  ) => {
    onOptionSelected(item, index);
  };



  return (
    <>
      <Modal transparent={true} visible={showOptions} animationType="fade">
        <TouchableOpacity
          onPress={() => showOptions(false)}
          activeOpacity={1}
        >
         <View
        style={[

          {
            top: posicionModal.top + 5,
            left: posicionModal.left + 25,
          },
        ]}
      >
        <Text>hello</Text>
      </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default InputOptions;