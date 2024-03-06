import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FilmIcon = ({
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
        d="M19.82 1H4.18C2.42 1 1 2.42 1 4.18V19.82C1 21.58 2.42 23 4.18 23H19.82C21.58 23 23 21.58 23 19.82V4.18C23 2.42 21.58 1 19.82 1ZM18 8H21V11H18V8ZM16 11H8V3H16V11ZM6 11H3V8H6V11ZM3 13H6V16H3V13ZM8 13H16V21H8V13ZM18 13H21V16H18V13ZM21 4.18V6H18V3H19.82C20.47 3 21 3.53 21 4.18ZM4.18 3H6V6H3V4.18C3 3.53 3.53 3 4.18 3ZM3 19.82V18H6V21H4.18C3.53 21 3 20.47 3 19.82ZM19.82 21H18V18H21V19.82C21 20.47 20.47 21 19.82 21Z"
        fill={fill}
      />
    </Svg>
  );
};
