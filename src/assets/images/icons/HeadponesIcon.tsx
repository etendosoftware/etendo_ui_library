import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const HeadponesIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.07 4.93C17.19 3.05 14.65 2 12 2C9.35 2 6.8 3.05 4.93 4.93C3.06 6.81 2 9.35 2 12V19C2 19.8 2.32 20.56 2.88 21.12C3.44 21.68 4.21 22 5 22H6C6.8 22 7.56 21.68 8.12 21.12C8.68 20.56 9 19.79 9 19V16C9 15.2 8.68 14.44 8.12 13.88C7.56 13.32 6.79 13 6 13H4V12C4 9.88 4.84 7.84 6.34 6.34C7.84 4.84 9.88 4 12 4C14.12 4 16.16 4.84 17.66 6.34C19.16 7.84 20 9.88 20 12V13H18C17.2 13 16.44 13.32 15.88 13.88C15.32 14.44 15 15.21 15 16V19C15 19.8 15.32 20.56 15.88 21.12C16.44 21.68 17.21 22 18 22H19C19.8 22 20.56 21.68 21.12 21.12C21.68 20.56 22 19.79 22 19V12C22 9.35 20.95 6.8 19.07 4.93ZM6 15C6.27 15 6.52 15.11 6.71 15.29C6.9 15.48 7 15.73 7 16V19C7 19.27 6.89 19.52 6.71 19.71C6.52 19.9 6.27 20 6 20H5C4.73 20 4.48 19.89 4.29 19.71C4.1 19.52 4 19.27 4 19V15H6ZM20 19C20 19.27 19.89 19.52 19.71 19.71C19.53 19.9 19.27 20 19 20H18C17.73 20 17.48 19.89 17.29 19.71C17.1 19.53 17 19.27 17 19V16C17 15.73 17.11 15.48 17.29 15.29C17.47 15.1 17.73 15 18 15H20V19Z"
        fill={fill}
      />
    </Svg>
  );
};
