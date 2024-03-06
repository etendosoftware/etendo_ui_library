import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerUpRight = ({
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
        d="M20.92 9.38C21.02 9.14 21.02 8.86 20.92 8.62C20.87 8.5 20.8 8.39 20.71 8.3L15.71 3.29C15.32 2.9 14.69 2.9 14.3 3.29C13.91 3.68 13.91 4.31 14.3 4.7L17.59 7.99H8C6.67 7.99 5.4 8.52 4.46 9.45C3.52 10.38 3 11.66 3 12.99V19.99C3 20.54 3.45 20.99 4 20.99C4.55 20.99 5 20.54 5 19.99V12.99C5 12.19 5.32 11.43 5.88 10.87C6.44 10.31 7.21 9.99 8 9.99H17.59L14.3 13.28C13.91 13.67 13.91 14.3 14.3 14.69C14.69 15.08 15.32 15.08 15.71 14.69L20.71 9.69C20.8 9.6 20.87 9.49 20.92 9.37V9.38Z"
        fill={fill}
      />
    </Svg>
  );
};
