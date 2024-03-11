import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TrendingDownIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7427)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.0001 18V12C24.0001 11.45 23.5501 11 23.0001 11C22.4501 11 22.0001 11.45 22.0001 12V15.59L14.2101 7.8C13.8201 7.41 13.1901 7.41 12.8001 7.8L8.51006 12.09L1.71006 5.29C1.32006 4.9 0.680059 4.9 0.290059 5.29C-0.0999414 5.68 -0.0999414 6.32 0.290059 6.71L7.79006 14.21C8.18006 14.6 8.81006 14.6 9.20006 14.21L13.4901 9.92L20.5801 17.01H16.9901C16.4401 17.01 15.9901 17.46 15.9901 18.01C15.9901 18.56 16.4401 19.01 16.9901 19.01H22.9901C23.1201 19.01 23.2501 18.98 23.3701 18.93C23.4901 18.88 23.6001 18.81 23.6901 18.72C23.7801 18.63 23.8501 18.52 23.9001 18.4C23.9501 18.28 23.9801 18.15 23.9801 18.02L24.0001 18Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7427">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
