import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ZapIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.3982 1.08269C13.8054 1.25946 14.0474 1.68353 13.9923 2.12403L13.1328 9H21C21.388 9 21.741 9.22445 21.9056 9.57584C22.0702 9.92723 22.0166 10.3421 21.7682 10.6402L11.7682 22.6402C11.484 22.9812 11.009 23.0941 10.6018 22.9173C10.1946 22.7405 9.95267 22.3165 10.0077 21.876L10.8672 15H3.00001C2.61199 15 2.259 14.7755 2.09442 14.4242C1.92984 14.0728 1.98339 13.6579 2.23179 13.3598L12.2318 1.35981C12.516 1.01878 12.991 0.905925 13.3982 1.08269ZM5.13505 13H12C12.2868 13 12.5599 13.1232 12.7497 13.3382C12.9395 13.5532 13.0279 13.8394 12.9923 14.124L12.4154 18.7395L18.865 11H12C11.7132 11 11.4402 10.8768 11.2503 10.6618C11.0605 10.4468 10.9722 10.1606 11.0077 9.87596L11.5847 5.26045L5.13505 13Z"
        fill={fill}
      />
    </Svg>
  );
};
