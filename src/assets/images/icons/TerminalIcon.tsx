import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TerminalIcon = ({
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
        d="M3.29289 4.29289C3.68342 3.90237 4.31658 3.90237 4.70711 4.29289L10.7071 10.2929C11.0976 10.6834 11.0976 11.3166 10.7071 11.7071L4.70711 17.7071C4.31658 18.0976 3.68342 18.0976 3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929L8.58579 11L3.29289 5.70711C2.90237 5.31658 2.90237 4.68342 3.29289 4.29289Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 19C11 18.4477 11.4477 18 12 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H12C11.4477 20 11 19.5523 11 19Z"
        fill={fill}
      />
    </Svg>
  );
};
