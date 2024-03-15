import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const ShoppingBagIcon = ({
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
        d="M21.93 5.65C21.93 5.65 21.89 5.58 21.87 5.54C21.85 5.49 21.83 5.44 21.8 5.4L18.8 1.4C18.61 1.15 18.31 1 18 1H6C5.69 1 5.39 1.15 5.2 1.4L2.2 5.4C2.2 5.4 2.15 5.49 2.13 5.54C2.11 5.58 2.09 5.61 2.07 5.65C2.03 5.76 2 5.88 2 6V20C2 20.8 2.32 21.56 2.88 22.12C3.44 22.68 4.21 23 5 23H19C19.8 23 20.56 22.68 21.12 22.12C21.68 21.56 22 20.79 22 20V6C22 5.88 21.97 5.76 21.93 5.65ZM6.5 3H17.5L19 5H5L6.5 3ZM19.71 20.71C19.52 20.9 19.27 21 19 21H5C4.73 21 4.48 20.89 4.29 20.71C4.1 20.52 4 20.27 4 20V7H20V20C20 20.27 19.89 20.52 19.71 20.71Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 9C15.45 9 15 9.45 15 10C15 10.8 14.68 11.56 14.12 12.12C13.56 12.68 12.79 13 12 13C11.21 13 10.44 12.68 9.88 12.12C9.32 11.56 9 10.79 9 10C9 9.45 8.55 9 8 9C7.45 9 7 9.45 7 10C7 11.33 7.53 12.6 8.46 13.54C9.4 14.48 10.67 15 12 15C13.33 15 14.6 14.47 15.54 13.54C16.48 12.6 17 11.33 17 10C17 9.45 16.55 9 16 9Z"
        fill={fill}
      />
    </Svg>
  );
};
