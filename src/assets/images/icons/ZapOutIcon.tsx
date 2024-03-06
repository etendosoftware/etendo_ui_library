import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ZapOutIcon = ({
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
        d="M21.71 20.29L18.03 16.61C19.26 15.07 20 13.12 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.12 20 15.07 19.26 16.61 18.03L20.29 21.71C20.68 22.1 21.31 22.1 21.7 21.71C22.09 21.32 22.09 20.69 21.7 20.3L21.71 20.29ZM4 11C4 7.13 7.13 4 11 4C14.87 4 18 7.13 18 11C18 12.92 17.23 14.66 15.98 15.92C15.97 15.92 15.96 15.93 15.95 15.94C15.94 15.95 15.94 15.96 15.93 15.97C14.67 17.22 12.93 17.99 11.01 17.99C7.14 17.99 4.01 14.86 4.01 10.99L4 11Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 10H8C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12H14C14.55 12 15 11.55 15 11C15 10.45 14.55 10 14 10Z"
        fill={fill}
      />
    </Svg>
  );
};
