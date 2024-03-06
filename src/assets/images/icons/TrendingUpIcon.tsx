import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, Defs, ClipPath, Rect, G } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TrendingUpIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7571)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.9201 5.62C23.8201 5.38 23.6201 5.18 23.3801 5.08C23.2601 5.03 23.1301 5 23.0001 5H17.0001C16.4501 5 16.0001 5.45 16.0001 6C16.0001 6.55 16.4501 7 17.0001 7H20.5901L13.5001 14.09L9.21006 9.8C8.82006 9.41 8.19006 9.41 7.80006 9.8L0.290059 17.29C-0.0999414 17.68 -0.0999414 18.31 0.290059 18.7C0.680059 19.09 1.31006 19.09 1.70006 18.7L8.49006 11.91L12.7801 16.2C13.1701 16.59 13.8001 16.59 14.1901 16.2L21.9801 8.41V12C21.9801 12.55 22.4301 13 22.9801 13C23.5301 13 23.9801 12.55 23.9801 12V6C23.9801 5.87 23.9501 5.74 23.9001 5.62H23.9201Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7571">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
