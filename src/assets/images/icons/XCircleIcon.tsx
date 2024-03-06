import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const XCircleIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21Z"
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
