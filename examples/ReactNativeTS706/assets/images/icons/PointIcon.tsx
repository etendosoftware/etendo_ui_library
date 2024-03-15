import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const PointIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 8);
  const height = sizeSvg(style?.height, 8);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 8"
      fill="none"
      style={style}>
      <Circle cx="4" cy="4" r="4" fill={fill} />
    </Svg>
  );
};
