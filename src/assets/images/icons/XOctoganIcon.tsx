import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const XOctoganIcon = ({
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
        d="M22.71 7.15L16.85 1.29C16.66 1.1 16.41 1 16.14 1H7.86C7.59 1 7.34 1.11 7.15 1.29L1.29 7.15C1.1 7.34 1 7.59 1 7.86V16.14C1 16.41 1.11 16.66 1.29 16.85L7.15 22.71C7.34 22.9 7.59 23 7.86 23H16.14C16.41 23 16.66 22.89 16.85 22.71L22.71 16.85C22.9 16.66 23 16.41 23 16.14V7.86C23 7.59 22.89 7.34 22.71 7.15ZM21 15.73L15.73 21H8.28L3.01 15.73V8.28L8.27 3H15.72L20.99 8.27V15.72L21 15.73Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.71 8.29C15.32 7.9 14.69 7.9 14.3 8.29L12.01 10.58L9.72 8.29C9.33 7.9 8.7 7.9 8.31 8.29C7.92 8.68 7.92 9.31 8.31 9.7L10.6 11.99L8.31 14.28C7.92 14.67 7.92 15.3 8.31 15.69C8.7 16.08 9.33 16.08 9.72 15.69L12.01 13.4L14.3 15.69C14.69 16.08 15.32 16.08 15.71 15.69C16.1 15.3 16.1 14.67 15.71 14.28L13.42 11.99L15.71 9.7C16.1 9.31 16.1 8.68 15.71 8.29Z"
        fill={fill}
      />
    </Svg>
  );
};
