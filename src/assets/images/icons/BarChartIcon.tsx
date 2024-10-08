import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BarChartIcon = ({
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
        d="M12 9C12.5523 9 13 9.44772 13 10V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V10C11 9.44772 11.4477 9 12 9Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 3C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21C17.4477 21 17 20.5523 17 20V4C17 3.44772 17.4477 3 18 3Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 15C6.55228 15 7 15.4477 7 16V20C7 20.5523 6.55228 21 6 21C5.44772 21 5 20.5523 5 20V16C5 15.4477 5.44772 15 6 15Z"
        fill={fill}
      />
    </Svg>
  );
};
