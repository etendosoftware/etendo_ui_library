import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const TrashIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 5H17V4C17 3.2 16.68 2.44 16.12 1.88C15.56 1.32 14.79 1 14 1H10C9.2 1 8.44 1.32 7.88 1.88C7.32 2.44 7 3.21 7 4V5H3C2.45 5 2 5.45 2 6C2 6.55 2.45 7 3 7H4V20C4 20.8 4.32 21.56 4.88 22.12C5.44 22.68 6.21 23 7 23H17C17.8 23 18.56 22.68 19.12 22.12C19.68 21.56 20 20.79 20 20V7H21C21.55 7 22 6.55 22 6C22 5.45 21.55 5 21 5ZM9 4C9 3.73 9.11 3.48 9.29 3.29C9.48 3.1 9.73 3 10 3H14C14.27 3 14.52 3.11 14.71 3.29C14.9 3.47 15 3.73 15 4V5H9V4ZM18 20C18 20.27 17.89 20.52 17.71 20.71C17.53 20.9 17.27 21 17 21H7C6.73 21 6.48 20.89 6.29 20.71C6.1 20.52 6 20.27 6 20V7H18V20Z"
        fill={fill}
      />
    </Svg>
  );
};
