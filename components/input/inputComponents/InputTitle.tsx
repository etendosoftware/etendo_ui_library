import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { getImageStyle } from '../../../helpers/utilImage';

import {InputTitleProps} from '../Input.types';

const InputTitle: React.FC<InputTitleProps> = ({title, image,styleTitle,disabled}) => {
  return (
      <View style={styles.row}>
        {image?.imgRoute &&
        <Image
          style={[getImageStyle(image,disabled)]}
          source={image?.imgRoute}
        />}
        {title !== '' && <Text style={styleTitle}>{title}</Text>}
      </View> 
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
    marginLeft:5,
  },
});

export default InputTitle;
