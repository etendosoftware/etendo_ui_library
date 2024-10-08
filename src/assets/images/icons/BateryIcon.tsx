import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BateryIcon = ({
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
        d="M3 7C2.44772 7 2 7.44772 2 8V16C2 16.5523 2.44772 17 3 17H17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7H3ZM0 8C0 6.34315 1.34315 5 3 5H17C18.6569 5 20 6.34315 20 8V16C20 17.6569 18.6569 19 17 19H3C1.34315 19 0 17.6569 0 16V8Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 10C23.5523 10 24 10.4477 24 11V13C24 13.5523 23.5523 14 23 14C22.4477 14 22 13.5523 22 13V11C22 10.4477 22.4477 10 23 10Z"
        fill={fill}
      />
    </Svg>
  );
};
