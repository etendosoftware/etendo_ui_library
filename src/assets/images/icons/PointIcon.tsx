import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const PointIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width ?? 8}
      height={style?.height ?? 8}
      viewBox="0 0 8 8"
      fill="none"
      style={style}>
      <Circle cx="4" cy="4" r="4" fill={fill} />
    </Svg>
  );
};
