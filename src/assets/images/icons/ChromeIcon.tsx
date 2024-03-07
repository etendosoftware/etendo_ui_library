import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ChromeIcon = ({
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
        d="M22.1 7.64C22.1 7.64 22.08 7.6 22.07 7.57C20.36 3.7 16.5 1 12 1C8.4 1 5.22 2.73 3.21 5.4C3.17 5.44 3.14 5.48 3.11 5.53C1.79 7.35 1 9.58 1 12C1 17.64 5.25 22.28 10.72 22.92C10.75 22.92 10.77 22.92 10.79 22.93C11.19 22.97 11.59 23 12 23C18.08 23 23 18.08 23 12C23 10.45 22.68 8.98 22.1 7.64ZM12 3C15.12 3 17.87 4.59 19.48 7H12C9.94 7 8.17 8.25 7.4 10.04L5.16 6.16C6.81 4.23 9.26 3 12 3ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12ZM3 12C3 10.57 3.34 9.23 3.93 8.03L7.67 14.5C7.67 14.5 7.71 14.54 7.72 14.56C8.59 16.02 10.17 17 12 17C12.21 17 12.41 16.96 12.61 16.94L10.36 20.84C6.17 20.07 3 16.41 3 12ZM12.59 20.97L16.32 14.5C16.32 14.5 16.34 14.44 16.35 14.41C16.75 13.69 16.99 12.88 16.99 12C16.99 10.87 16.6 9.84 15.97 9H20.47C20.8 9.94 20.99 10.95 20.99 12C20.99 16.77 17.28 20.66 12.58 20.97H12.59Z"
        fill={fill}
      />
    </Svg>
  );
};
