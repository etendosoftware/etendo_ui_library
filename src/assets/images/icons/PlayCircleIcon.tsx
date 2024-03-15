import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const PlayCircleIcon = ({
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
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.52814 7.11833C9.8533 6.94431 10.2478 6.96338 10.5547 7.16795L16.5547 11.1679C16.8329 11.3534 17 11.6656 17 12C17 12.3344 16.8329 12.6466 16.5547 12.8321L10.5547 16.8321C10.2478 17.0366 9.8533 17.0557 9.52814 16.8817C9.20298 16.7077 9 16.3688 9 16V8C9 7.6312 9.20298 7.29234 9.52814 7.11833ZM11 9.86852V14.1315L14.1972 12L11 9.86852Z"
        fill={fill}
      />
    </Svg>
  );
};
