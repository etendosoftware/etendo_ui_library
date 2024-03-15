import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const FrownIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12C23 5.93 18.07 1 12 1ZM12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21Z"
        fill={fill}
      />
      <Path
        d="M12 13C9.03 13 7.27 15.3 7.2 15.4C6.87 15.84 6.96 16.46 7.4 16.79C7.84 17.12 8.46 17.04 8.8 16.6C8.81 16.58 10.05 15 12 15C13.95 15 15.17 16.57 15.2 16.6C15.4 16.86 15.7 17 16 17C16.21 17 16.42 16.93 16.6 16.8C17.04 16.47 17.13 15.84 16.8 15.4C16.73 15.3 14.97 13 12 13Z"
        fill={fill}
      />
      <Path
        d="M9.01 10C9.56 10 10.01 9.55 10.01 9C10.01 8.45 9.56 8 9.01 8C8.46 8 8.01 8.45 8.01 9C8.01 9.55 8.46 10 9.01 10Z"
        fill={fill}
      />
      <Path
        d="M15.01 10C15.56 10 16.01 9.55 16.01 9C16.01 8.45 15.56 8 15.01 8C14.46 8 14.01 8.45 14.01 9C14.01 9.55 14.46 10 15.01 10Z"
        fill={fill}
      />
    </Svg>
  );
};
