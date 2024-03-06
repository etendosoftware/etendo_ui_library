import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const XIcon = ({ style, fill = DEFAULT_COLOR_THEME }: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4101 12L18.7101 6.71C19.1001 6.32 19.1001 5.69 18.7101 5.3C18.3201 4.91 17.6901 4.91 17.3001 5.3L12.0101 10.59L6.71006 5.29C6.32006 4.9 5.68006 4.9 5.29006 5.29C4.90006 5.68 4.90006 6.32 5.29006 6.71L10.5801 12L5.29006 17.29C4.90006 17.68 4.90006 18.31 5.29006 18.7C5.68006 19.09 6.31006 19.09 6.70006 18.7L11.9901 13.41L17.2801 18.7C17.6701 19.09 18.3001 19.09 18.6901 18.7C19.0801 18.31 19.0801 17.68 18.6901 17.29L13.4001 12H13.4101Z"
        fill={fill}
      />
    </Svg>
  );
};
