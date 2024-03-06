import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const WatchIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 12C20 9.72 19.03 7.66 17.49 6.2L17.17 2.73C17.1 1.98 16.76 1.29 16.2 0.78C15.65 0.27 14.97 0 14.18 0H9.83C9.08 0 8.36 0.28 7.81 0.79C7.26 1.3 6.91 1.99 6.85 2.73L6.53 6.18C4.98 7.64 4 9.71 4 12C4 14.29 4.97 16.35 6.52 17.81L6.84 21.27C6.91 22.02 7.25 22.71 7.81 23.22C8.36 23.72 9.08 24 9.83 24H14.18C14.93 24 15.65 23.72 16.2 23.22C16.76 22.71 17.1 22.02 17.17 21.27L17.48 17.82C19.03 16.36 20.01 14.29 20.01 12H20ZM8.84 2.91C8.86 2.66 8.98 2.43 9.16 2.26C9.34 2.09 9.58 2 9.83 2H14.19C14.44 2 14.68 2.09 14.86 2.26C15.05 2.43 15.16 2.66 15.18 2.91L15.35 4.74C14.33 4.27 13.2 3.99 12 3.99C10.8 3.99 9.68 4.26 8.67 4.73L8.84 2.9V2.91ZM6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12ZM15.16 21.09C15.14 21.34 15.02 21.57 14.84 21.74C14.66 21.91 14.4 22.03 14.16 22H9.82C9.57 22 9.33 21.91 9.15 21.74C8.96 21.57 8.85 21.34 8.83 21.09L8.66 19.26C9.68 19.73 10.81 20 12 20C13.19 20 14.32 19.73 15.33 19.26L15.16 21.08V21.09Z"
        fill={fill}
      />
      <Path
        d="M12.79 14.21C12.99 14.41 13.24 14.5 13.5 14.5C13.76 14.5 14.01 14.4 14.21 14.21C14.6 13.82 14.6 13.19 14.21 12.8L13 11.59V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V12C11 12.27 11.11 12.52 11.29 12.71L12.79 14.21Z"
        fill={fill}
      />
    </Svg>
  );
};
