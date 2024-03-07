import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const HomeIcon = ({
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
        d="M21.61 8.21L12.61 1.21C12.25 0.93 11.74 0.93 11.38 1.21L2.39 8.21C2.15 8.4 2 8.69 2 9V20C2 20.8 2.32 21.56 2.88 22.12C3.44 22.68 4.21 23 5 23H19C19.8 23 20.56 22.68 21.12 22.12C21.68 21.56 22 20.79 22 20V9C22 8.69 21.86 8.4 21.61 8.21ZM14 21H10V13H14V21ZM20 20C20 20.27 19.89 20.52 19.71 20.71C19.53 20.9 19.27 21 19 21H16V12C16 11.45 15.55 11 15 11H9C8.45 11 8 11.45 8 12V21H5C4.73 21 4.48 20.89 4.29 20.71C4.1 20.52 4 20.27 4 20V9.49L12 3.27L20 9.49V20Z"
        fill={fill}
      />
    </Svg>
  );
};
