import React, {FC} from 'react';
import {Image, Platform, ViewStyle} from 'react-native';

interface CustomImageProps {
  src?: string;
  alt?: string;
  source?: {uri: string};
  style?: ViewStyle;
}

const CustomImage: FC<CustomImageProps> = ({src, alt, source, style}) => {
  return Platform.OS === 'web' ? (
    <img src={src} alt={alt} style={style} />
  ) : (
    <Image source={source} style={style} />
  );
};

export default CustomImage;
