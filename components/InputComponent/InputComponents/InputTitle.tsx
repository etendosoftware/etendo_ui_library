import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BLACK} from '../../../styles/colors';
import {InputImageType} from '../Input.types';

interface Props {
  title?: string;
  image?: InputImageType;
}

const InputTitle: React.FC<Props> = ({title, image}) => {
  return (
    <View style={styles.row}>
      { image?.imgRoute &&
      <Image
        style={{
          width: image?.imgWidth,
          height: image?.imgHeight,
          marginRight: image?.imgMarginRight,
        }}
        source={image?.imgRoute}
      />}
      {title && <Text style={styles.labelMedium}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'center',
  },
  labelMedium: {
    color: BLACK,
    fontSize: 11,
  },
});

export default InputTitle;
