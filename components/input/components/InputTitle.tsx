import React from 'react';
import {Image, Text, View} from 'react-native';
import addImageStyle from '../../../helpers/image_utils';
import {styles} from '../Input.style';
import {InputTitleProps} from '../Input.types';

const InputTitle = ({title, image, styleTitle, disabled}: InputTitleProps) => {
  return (
    <View style={styles.rowInputTitle}>

      {title && <Text style={styleTitle}>{title}</Text>}
    </View>
  );
};

export default InputTitle;
