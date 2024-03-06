import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MonitorIcon = ({
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
        d="M20 2H4C2.34 2 1 3.34 1 5V15C1 16.66 2.34 18 4 18H11V20H8C7.45 20 7 20.45 7 21C7 21.55 7.45 22 8 22H16C16.55 22 17 21.55 17 21C17 20.45 16.55 20 16 20H13V18H20C21.66 18 23 16.66 23 15V5C23 3.34 21.66 2 20 2ZM21 15C21 15.55 20.55 16 20 16H4C3.45 16 3 15.55 3 15V5C3 4.45 3.45 4 4 4H20C20.55 4 21 4.45 21 5V15Z"
        fill={fill}
      />
    </Svg>
  );
};
