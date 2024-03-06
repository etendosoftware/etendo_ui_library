import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const Minimize2Icon = ({
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
        d="M8 2C8.55228 2 9 2.44772 9 3V6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H6C6.26522 7 6.51957 6.89464 6.70711 6.70711C6.89464 6.51957 7 6.26522 7 6V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V6C17 6.26522 17.1054 6.51957 17.2929 6.70711C17.4804 6.89464 17.7348 7 18 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H18C17.2044 9 16.4413 8.68393 15.8787 8.12132C15.3161 7.55871 15 6.79565 15 6V3C15 2.44772 15.4477 2 16 2ZM2 16C2 15.4477 2.44772 15 3 15H6C6.79565 15 7.55871 15.3161 8.12132 15.8787C8.68393 16.4413 9 17.2044 9 18V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V18C7 17.7348 6.89464 17.4804 6.70711 17.2929C6.51957 17.1054 6.26522 17 6 17H3C2.44772 17 2 16.5523 2 16ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V18C15 17.2043 15.3161 16.4413 15.8787 15.8787C16.4413 15.3161 17.2043 15 18 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H18Z"
        fill={fill}
      />
    </Svg>
  );
};
