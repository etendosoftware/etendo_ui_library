import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ApertureIcon = ({
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
        d="M20.89 18.46C22.21 16.64 23 14.41 23 12C23 10.45 22.68 8.98 22.1 7.64C22.1 7.62 22.08 7.6 22.07 7.57C20.52 4.08 17.22 1.54 13.28 1.08C13.25 1.08 13.23 1.08 13.21 1.07C12.81 1.03 12.41 1 12 1C8.4 1 5.22 2.73 3.21 5.4C3.17 5.44 3.14 5.48 3.11 5.53C1.79 7.35 1 9.58 1 12C1 13.55 1.32 15.02 1.9 16.36C1.9 16.38 1.92 16.4 1.93 16.43C3.47 19.92 6.77 22.46 10.71 22.92C10.74 22.92 10.76 22.92 10.79 22.93C11.19 22.97 11.59 23 12 23C15.6 23 18.78 21.27 20.79 18.6C20.83 18.56 20.86 18.52 20.89 18.47V18.46ZM13.73 15H10.26L8.53 12L10.26 9H13.73L15.46 12L13.73 15ZM3 12C3 10.57 3.34 9.23 3.93 8.03L7.96 15H3.52C3.19 14.06 3 13.05 3 12ZM16.04 9H20.47C20.8 9.94 20.99 10.95 20.99 12C20.99 13.43 20.65 14.77 20.06 15.97L16.03 9H16.04ZM19.48 7H11.42L13.64 3.16C16.07 3.61 18.16 5.03 19.48 7ZM11.41 3.03L7.39 10L5.17 6.16C6.7 4.37 8.92 3.2 11.41 3.03ZM4.52 17H12.58L10.36 20.84C7.93 20.39 5.84 18.97 4.52 17ZM12.59 20.97L16.61 14L18.83 17.84C17.3 19.63 15.08 20.8 12.59 20.97Z"
        fill={fill}
      />
    </Svg>
  );
};
