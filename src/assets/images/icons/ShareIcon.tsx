import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ShareIcon = ({
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
        d="M20 11C19.45 11 19 11.45 19 12V20C19 20.27 18.89 20.52 18.71 20.71C18.53 20.9 18.27 21 18 21H6C5.73 21 5.48 20.89 5.29 20.71C5.1 20.52 5 20.27 5 20V12C5 11.45 4.55 11 4 11C3.45 11 3 11.45 3 12V20C3 20.8 3.32 21.56 3.88 22.12C4.44 22.68 5.21 23 6 23H18C18.8 23 19.56 22.68 20.12 22.12C20.68 21.56 21 20.79 21 20V12C21 11.45 20.55 11 20 11Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.71 6.71L11 4.42V15.01C11 15.56 11.45 16.01 12 16.01C12.55 16.01 13 15.56 13 15.01V4.41L15.29 6.7C15.68 7.08999 16.31 7.08999 16.7 6.7C17.09 6.31 17.09 5.68 16.7 5.29L12.71 1.29C12.62 1.2 12.51 1.12 12.39 1.07C12.15 0.969995 11.87 0.969995 11.63 1.07C11.51 1.12 11.4 1.19 11.31 1.28L7.31 5.28C6.92 5.67 6.92 6.3 7.31 6.69C7.7 7.08 8.33 7.08 8.72 6.69L8.71 6.71Z"
        fill={fill}
      />
    </Svg>
  );
};
