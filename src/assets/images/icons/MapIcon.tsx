import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MapIcon = ({
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
        d="M23.5 1.14C23.19 0.960005 22.81 0.960005 22.5 1.14L15.96 4.87L8.45 1.11C8.45 1.11 8.42 1.11 8.41 1.1C8.39 1.1 8.37 1.09 8.35 1.08C8.25 1.04 8.14 1.02 8.03 1.02C8.03 1.02 8.01 1.02 8 1.02C8 1.02 8 1.02 7.99 1.02C7.87 1.02 7.76 1.05 7.65 1.09C7.62 1.09 7.6 1.11 7.58 1.12C7.56 1.13 7.53 1.14 7.51 1.15L0.5 5.13C0.19 5.31 0 5.64 0 6V22C0 22.36 0.19 22.69 0.5 22.86C0.81 23.04 1.19 23.04 1.5 22.86L8.04 19.13L15.56 22.89C15.56 22.89 15.59 22.89 15.6 22.9C15.62 22.9 15.64 22.91 15.66 22.92C15.76 22.96 15.87 22.98 15.98 22.98C15.98 22.98 16 22.98 16.01 22.98C16.01 22.98 16.01 22.98 16.02 22.98C16.14 22.98 16.25 22.95 16.36 22.91C16.39 22.91 16.41 22.89 16.43 22.88C16.45 22.87 16.48 22.86 16.5 22.85L23.5 18.85C23.81 18.67 24 18.34 24 17.98V2C24 1.64 23.81 1.31 23.5 1.14ZM9 3.62L15 6.62V20.38L9 17.38V3.62ZM2 6.58L7 3.72001V17.42L2 20.28V6.58ZM22 17.42L17 20.28V6.58L22 3.72001V17.42Z"
        fill={fill}
      />
    </Svg>
  );
};
