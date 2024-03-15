import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MousePointerIcon = ({
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
        d="M21.3511 10.1511L4.38115 3.08115C4.01115 2.92115 3.58115 3.00115 3.29115 3.29115C3.00115 3.58115 2.92115 4.01115 3.08115 4.38115L10.1511 21.3511C10.3111 21.7311 10.6911 21.9811 11.1111 21.9611C11.5311 21.9511 11.8911 21.6811 12.0211 21.2811L14.0111 15.4111L19.2911 20.6911C19.6811 21.0811 20.3111 21.0811 20.7011 20.6911C21.0911 20.3011 21.0911 19.6711 20.7011 19.2811L15.4211 14.0011L21.2911 12.0111C21.6811 11.8811 21.9511 11.5111 21.9711 11.1011C21.9811 10.6811 21.7411 10.3011 21.3611 10.1411L21.3511 10.1511ZM13.2611 12.6311C12.9711 12.7311 12.7311 12.9611 12.6311 13.2611L10.9711 18.1411L5.86115 5.86115L18.1411 10.9811L13.2611 12.6411V12.6311Z"
        fill={fill}
      />
    </Svg>
  );
};
