import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SunriseIcon = ({
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
        d="M12 12C10.41 12 8.88 12.63 7.76 13.76C6.63 14.89 6 16.41 6 18C6 18.55 6.45 19 7 19C7.55 19 8 18.55 8 18C8 16.94 8.42 15.92 9.17 15.17C9.92 14.42 10.94 14 12 14C13.06 14 14.08 14.42 14.83 15.17C15.58 15.92 16 16.94 16 18C16 18.55 16.45 19 17 19C17.55 19 18 18.55 18 18C18 16.41 17.37 14.88 16.24 13.76C15.11 12.63 13.59 12 12 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.93 12.35C5.32 12.74 5.95 12.74 6.34 12.35C6.73 11.96 6.73 11.33 6.34 10.94L4.92 9.52C4.53 9.13 3.9 9.13 3.51 9.52C3.12 9.91 3.12 10.54 3.51 10.93L4.93 12.35Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 19H3C3.55 19 4 18.55 4 18C4 17.45 3.55 17 3 17H1C0.45 17 0 17.45 0 18C0 18.55 0.45 19 1 19Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 18C20 18.55 20.45 19 21 19H23C23.55 19 24 18.55 24 18C24 17.45 23.55 17 23 17H21C20.45 17 20 17.45 20 18Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.07 12.35L20.49 10.93C20.88 10.54 20.88 9.91 20.49 9.52C20.1 9.13 19.47 9.13 19.08 9.52L17.66 10.94C17.27 11.33 17.27 11.96 17.66 12.35C18.05 12.74 18.68 12.74 19.07 12.35Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 21H1C0.45 21 0 21.45 0 22C0 22.55 0.45 23 1 23H23C23.55 23 24 22.55 24 22C24 21.45 23.55 21 23 21Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.71 6.71L11 4.42V9.01C11 9.56 11.45 10.01 12 10.01C12.55 10.01 13 9.56 13 9.01V4.41L15.29 6.7C15.68 7.08999 16.31 7.08999 16.7 6.7C17.09 6.31 17.09 5.68 16.7 5.29L12.71 1.29C12.62 1.2 12.51 1.12 12.38 1.07C12.14 0.969995 11.86 0.969995 11.62 1.07C11.5 1.12 11.39 1.19 11.29 1.29L7.29 5.29C6.9 5.68 6.9 6.31 7.29 6.7C7.68 7.08999 8.31 7.08999 8.7 6.7L8.71 6.71Z"
        fill={fill}
      />
    </Svg>
  );
};
