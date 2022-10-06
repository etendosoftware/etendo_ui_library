import React from 'react';
import {Image, Text, View} from 'react-native';
import {getImageStyle} from '../../../helpers/utilImage';
import {styles} from '../Input.style';
import {InputTitleProps} from '../Input.types';

const InputTitle: React.FC<InputTitleProps> = ({
  title,
  image,
  styleTitle,
  disabled,
}) => {
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
