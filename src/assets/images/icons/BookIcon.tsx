import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BookIcon = ({
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
        d="M20 1H6.5C5.57 1 4.68 1.37 4.03 2.03C3.38 2.69 3 3.57 3 4.5V19.5C3 20.43 3.37 21.32 4.03 21.97C4.69 22.63 5.58 23 6.5 23H20C20.55 23 21 22.55 21 22V2C21 1.45 20.55 1 20 1ZM5.44 3.44C5.72 3.16 6.1 3 6.5 3H19V16H6.5C5.97 16 5.47 16.13 5 16.35V4.5C5 4.1 5.16 3.72 5.44 3.44ZM6.5 21C6.1 21 5.72 20.84 5.44 20.56C5.16 20.28 5 19.9 5 19.5C5 19.1 5.16 18.72 5.44 18.44C5.72 18.16 6.1 18 6.5 18H19V21H6.5Z"
        fill={fill}
      />
    </Svg>
  );
};
