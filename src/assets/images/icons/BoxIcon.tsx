import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BoxIcon = ({
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
        d="M21.66 6.66C21.64 6.59 21.63 6.52 21.59 6.46C21.53 6.36 21.45 6.27 21.36 6.2C21.12 5.89 20.84 5.6 20.49 5.41L13.5 1.4C13.04 1.14 12.53 1 12 1C11.47 1 10.96 1.14 10.5 1.4L3.49999 5.4C3.15999 5.6 2.86999 5.88 2.62999 6.2C2.53999 6.27 2.45999 6.36 2.39999 6.46C2.35999 6.52 2.34999 6.59 2.32999 6.66C2.11999 7.08 1.98999 7.53 1.98999 8V16C1.98999 16.53 2.12999 17.04 2.38999 17.5C2.64999 17.96 3.02999 18.33 3.48999 18.6L10.49 22.6C10.8 22.78 11.15 22.88 11.5 22.94C11.65 23.02 11.81 23.09 11.99 23.09C12.17 23.09 12.33 23.03 12.48 22.94C12.83 22.88 13.18 22.78 13.49 22.6L20.49 18.6C20.95 18.33 21.32 17.96 21.59 17.5C21.86 17.04 21.99 16.53 21.99 16V8C21.99 7.53 21.86 7.08 21.65 6.66H21.66ZM11.5 3.14C11.65 3.05 11.82 3 12 3C12.18 3 12.35 3.05 12.5 3.13L18.96 6.82L12 10.85L5.03999 6.83L11.5 3.14ZM4.49999 16.86C4.34999 16.77 4.21999 16.65 4.13999 16.49C4.04999 16.34 4.00999 16.17 4.00999 15.99V8.53L11.01 12.58V20.57L4.50999 16.86H4.49999ZM19.87 16.5C19.78 16.65 19.66 16.78 19.51 16.86L13.01 20.58V12.59L20.01 8.54V16C20.01 16.18 19.96 16.35 19.88 16.5H19.87Z"
        fill={fill}
      />
    </Svg>
  );
};
