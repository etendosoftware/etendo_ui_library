import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GitPullRequestIcon = ({
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
        d="M19 14.14V8C19 7.2 18.68 6.44 18.12 5.88C17.56 5.32 16.79 5 16 5H13C12.45 5 12 5.45 12 6C12 6.55 12.45 7 13 7H16C16.27 7 16.52 7.11 16.71 7.29C16.9 7.48 17 7.73 17 8V14.14C15.28 14.59 14 16.14 14 18C14 20.21 15.79 22 18 22C20.21 22 22 20.21 22 18C22 16.14 20.72 14.59 19 14.14ZM18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2C3.79 2 2 3.79 2 6C2 7.86 3.28 9.41 5 9.86V21C5 21.55 5.45 22 6 22C6.55 22 7 21.55 7 21V9.86C8.72 9.41 10 7.86 10 6C10 3.79 8.21 2 6 2ZM6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8Z"
        fill={fill}
      />
    </Svg>
  );
};
