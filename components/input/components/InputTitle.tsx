import React from 'react';
import {Image, Text, View} from 'react-native';
import {getImageStyle} from '../../../helpers/utilimage';
import {styles} from '../Input.style';
import {InputTitleProps} from '../Input.types';

const InputTitle = ({title, image, styleTitle, disabled}: InputTitleProps) => {
  return (
    <View style={styles.rowInputTitle}>
      {image?.imgRoute && (
        <Image
          style={[getImageStyle(image, disabled)]}
          source={image?.imgRoute}
        />
      )}
      {title && <Text style={styleTitle}>{title}</Text>}
    </View>
  );
};

export default InputTitle;
