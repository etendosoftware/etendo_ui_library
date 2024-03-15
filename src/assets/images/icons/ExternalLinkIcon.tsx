import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ExternalLinkIcon = ({
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
        d="M18 12C17.45 12 17 12.45 17 13V19C17 19.27 16.89 19.52 16.71 19.71C16.53 19.9 16.27 20 16 20H5C4.73 20 4.48 19.89 4.29 19.71C4.1 19.52 4 19.27 4 19V8C4 7.73 4.11 7.48 4.29 7.29C4.47 7.1 4.73 7 5 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H5C4.2 5 3.44 5.32 2.88 5.88C2.32 6.44 2 7.21 2 8V19C2 19.8 2.32 20.56 2.88 21.12C3.44 21.68 4.21 22 5 22H16C16.8 22 17.56 21.68 18.12 21.12C18.68 20.56 19 19.79 19 19V13C19 12.45 18.55 12 18 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.92 2.62C21.87 2.5 21.8 2.39 21.71 2.3C21.62 2.21 21.51 2.14 21.39 2.09C21.26 2.03 21.13 2 21 2H15C14.45 2 14 2.45 14 3C14 3.55 14.45 4 15 4H18.59L9.29 13.29C8.9 13.68 8.9 14.31 9.29 14.7C9.68 15.09 10.31 15.09 10.7 14.7L20 5.41V9C20 9.55 20.45 10 21 10C21.55 10 22 9.55 22 9V3C22 2.87 21.97 2.74 21.92 2.62Z"
        fill={fill}
      />
    </Svg>
  );
};
