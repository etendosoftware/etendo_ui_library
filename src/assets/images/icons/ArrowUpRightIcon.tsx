import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowUpRightIcon = ({
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
        d="M17.9201 6.62C17.8701 6.5 17.8001 6.39 17.7101 6.3C17.6201 6.21 17.5101 6.14 17.3901 6.09C17.2601 6.03 17.1301 6 17.0001 6H7.00006C6.45006 6 6.00006 6.45 6.00006 7C6.00006 7.55 6.45006 8 7.00006 8H14.5901L6.29006 16.29C5.90006 16.68 5.90006 17.31 6.29006 17.7C6.68006 18.09 7.31006 18.09 7.70006 17.7L16.0001 9.41V17C16.0001 17.55 16.4501 18 17.0001 18C17.5501 18 18.0001 17.55 18.0001 17V7C18.0001 6.87 17.9701 6.74 17.9201 6.62Z"
        fill={fill}
      />
    </Svg>
  );
};
