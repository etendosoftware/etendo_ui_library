import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Input.style';
import {InputTitleProps} from '../Input.types';
import {BLUE, GREY_BLUE_50} from '../../../styles/colors';

const InputTitle = ({
  titleLabel,
  titleImage,
  styleTitle,
  disabled,
}: InputTitleProps) => {
  const getImage = (image: React.ReactElement) => {
    if (image) {
      return React.cloneElement(image, {
        style: styles.rowInputTitleImg,
        fill: disabled ? GREY_BLUE_50 : BLUE,
      });
    }
  };

  return titleImage || titleLabel ? (
    <View style={styles.rowInputTitle}>
      {titleImage && getImage(titleImage)}
      {titleLabel && (
        <Text numberOfLines={1} ellipsizeMode="tail" style={styleTitle}>
          {titleLabel}
        </Text>
      )}
    </View>
  ) : (
    <></>
  );
};

export default InputTitle;
