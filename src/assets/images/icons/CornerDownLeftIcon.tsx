import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerDownLeftIcon = ({
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
        d="M20 3C19.45 3 19 3.45 19 4V11C19 11.8 18.68 12.56 18.12 13.12C17.56 13.68 16.79 14 16 14H6.41L9.7 10.71C10.09 10.32 10.09 9.69 9.7 9.3C9.31 8.91 8.68 8.91 8.29 9.3L3.29 14.29C3.2 14.38 3.13 14.49 3.08 14.61C2.98 14.85 2.98 15.13 3.08 15.37C3.13 15.49 3.2 15.59 3.29 15.69L8.29 20.69C8.68 21.08 9.31 21.08 9.7 20.69C10.09 20.3 10.09 19.67 9.7 19.28L6.41 15.99H16C17.33 15.99 18.6 15.46 19.54 14.53C20.48 13.59 21 12.32 21 10.99V4C21 3.45 20.55 3 20 3Z"
        fill={fill}
      />
    </Svg>
  );
};
