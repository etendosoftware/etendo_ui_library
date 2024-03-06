import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowUpIcon = ({
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
        d="M19.7101 11.29L12.7101 4.29C12.6201 4.2 12.5101 4.13 12.3901 4.08C12.1501 3.98 11.8701 3.98 11.6301 4.08C11.5101 4.13 11.4001 4.2 11.3101 4.3L4.29006 11.29C3.90006 11.68 3.90006 12.31 4.29006 12.7C4.68006 13.09 5.31006 13.09 5.70006 12.7L11.0001 7.41V19C11.0001 19.55 11.4501 20 12.0001 20C12.5501 20 13.0001 19.55 13.0001 19V7.41L18.2901 12.7C18.6801 13.09 19.3101 13.09 19.7001 12.7C20.0901 12.31 20.0901 11.68 19.7001 11.29H19.7101Z"
        fill={fill}
      />
    </Svg>
  );
};
