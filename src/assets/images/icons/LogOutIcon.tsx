import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LogOutIcon = ({
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
        d="M9 20H5C4.73 20 4.48 19.89 4.29 19.71C4.1 19.52 4 19.27 4 19V5C4 4.73 4.11 4.48 4.29 4.29C4.48 4.1 4.73 4 5 4H9C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2H5C4.2 2 3.44 2.32 2.88 2.88C2.32 3.44 2 4.21 2 5V19C2 19.8 2.32 20.56 2.88 21.12C3.44 21.68 4.21 22 5 22H9C9.55 22 10 21.55 10 21C10 20.45 9.55 20 9 20Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.92 11.62C21.87 11.5 21.8 11.39 21.7 11.3L16.7 6.3C16.31 5.91 15.68 5.91 15.29 6.3C14.9 6.69 14.9 7.32 15.29 7.71L18.58 11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H18.59L15.3 16.29C14.91 16.68 14.91 17.31 15.3 17.7C15.69 18.09 16.32 18.09 16.71 17.7L21.71 12.7C21.8 12.61 21.88 12.5 21.93 12.37C22.03 12.13 22.03 11.85 21.93 11.61L21.92 11.62Z"
        fill={fill}
      />
    </Svg>
  );
};
