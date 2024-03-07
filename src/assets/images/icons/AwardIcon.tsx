import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const AwardIcon = ({
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
        d="M20 8C20 3.58 16.42 0 12 0C7.58 0 4 3.58 4 8C4 10.59 5.23 12.88 7.14 14.34L6.01 22.86C5.96 23.24 6.13 23.62 6.45 23.83C6.77 24.04 7.18 24.05 7.51 23.85L12 21.16L16.49 23.85C16.82 24.05 17.23 24.04 17.55 23.83C17.87 23.62 18.04 23.24 17.99 22.86L16.86 14.34C18.77 12.88 20 10.58 20 8ZM6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8C18 10.1 16.92 11.94 15.29 13.02C14.35 13.64 13.22 14 12.01 14C8.7 14 6.01 11.31 6.01 8H6ZM15.74 21.08L12.52 19.15C12.2 18.96 11.81 18.96 11.49 19.15L8.27 21.08L9.02 15.42C9.94 15.79 10.95 16 12 16C13.05 16 14.06 15.79 14.99 15.42L15.74 21.08Z"
        fill={fill}
      />
    </Svg>
  );
};
