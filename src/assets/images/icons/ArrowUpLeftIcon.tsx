import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowUpLeftIcon = ({
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
        d="M9.41 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H7C6.87 6 6.74 6.03 6.62 6.08C6.5 6.13 6.39 6.2 6.3 6.29C6.21 6.38 6.14 6.49 6.09 6.61C6.03 6.74 6 6.86 6 6.99V16.99C6 17.54 6.45 17.99 7 17.99C7.55 17.99 8 17.54 8 16.99V9.41L16.29 17.7C16.68 18.09 17.31 18.09 17.7 17.7C18.09 17.31 18.09 16.68 17.7 16.29L9.41 8Z"
        fill={fill}
      />
    </Svg>
  );
};
