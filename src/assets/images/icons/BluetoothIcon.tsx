import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, Defs, Rect, G, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BluetoothIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Defs>
        <ClipPath id="clip0_1992_7522">
          <Rect width={width} height={height} fill="white" />
        </ClipPath>
      </Defs>
      <G clip-path="url(#clip0_1992_7522)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.6173 0.0761192C11.991 -0.0786618 12.4211 0.00689393 12.7071 0.292892L18.2071 5.79289C18.5976 6.18342 18.5976 6.81658 18.2071 7.20711L13.4142 12L18.2071 16.7929C18.5976 17.1834 18.5976 17.8166 18.2071 18.2071L12.7071 23.7071C12.4211 23.9931 11.991 24.0787 11.6173 23.9239C11.2436 23.7691 11 23.4045 11 23V14.4142L7.20711 18.2071C6.81658 18.5976 6.18342 18.5976 5.79289 18.2071C5.40237 17.8166 5.40237 17.1834 5.79289 16.7929L10.5858 12L5.79289 7.20711C5.40237 6.81658 5.40237 6.18342 5.79289 5.79289C6.18342 5.40237 6.81658 5.40237 7.20711 5.79289L11 9.58579V0.999999C11 0.595536 11.2436 0.2309 11.6173 0.0761192ZM13 14.4142L16.0858 17.5L13 20.5858V14.4142ZM13 9.58579V3.41421L16.0858 6.5L13 9.58579Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
};
