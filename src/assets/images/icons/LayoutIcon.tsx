import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LayoutIcon = ({
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
        d="M19 2H5C3.34 2 2 3.34 2 5V19C2 20.66 3.34 22 5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2ZM5 4H19C19.55 4 20 4.45 20 5V8H4V5C4 4.45 4.45 4 5 4ZM4 19V10H8V20H5C4.45 20 4 19.55 4 19ZM19 20H10V10H20V19C20 19.55 19.55 20 19 20Z"
        fill={fill}
      />
    </Svg>
  );
};
