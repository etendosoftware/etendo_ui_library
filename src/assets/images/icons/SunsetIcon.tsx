import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SunsetIcon = ({
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
        d="M11.29 9.71C11.38 9.8 11.49 9.87 11.61 9.92C11.85 10.02 12.13 10.02 12.37 9.92C12.49 9.87 12.6 9.8 12.69 9.71L16.69 5.71C17.08 5.32 17.08 4.69 16.69 4.3C16.3 3.91 15.67 3.91 15.28 4.3L12.99 6.59V2C12.99 1.45 12.54 1 11.99 1C11.44 1 10.99 1.45 10.99 2V6.59L8.7 4.3C8.31 3.91 7.68 3.91 7.29 4.3C6.9 4.69 6.9 5.32 7.29 5.71L11.29 9.71Z"
        fill={fill}
      />
    </Svg>
  );
};
