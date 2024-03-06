import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MusicIcon = ({
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
        d="M21.65 2.24C21.43 2.05 21.13 1.97 20.84 2.02L8.84 4.01C8.36 4.09 8 4.51 8 5V14.55C7.41 14.21 6.73 14 6 14C3.79 14 2 15.79 2 18C2 20.21 3.79 22 6 22C8.21 22 10 20.21 10 18V5.85L20 4.18V12.55C19.41 12.21 18.73 12 18 12C15.79 12 14 13.79 14 16C14 18.21 15.79 20 18 20C20.21 20 22 18.21 22 16V3C22 2.71 21.87 2.43 21.65 2.24ZM6 20C4.9 20 4 19.1 4 18C4 16.9 4.9 16 6 16C7.1 16 8 16.9 8 18C8 19.1 7.1 20 6 20ZM18 18C16.9 18 16 17.1 16 16C16 14.9 16.9 14 18 14C19.1 14 20 14.9 20 16C20 17.1 19.1 18 18 18Z"
        fill={fill}
      />
    </Svg>
  );
};
