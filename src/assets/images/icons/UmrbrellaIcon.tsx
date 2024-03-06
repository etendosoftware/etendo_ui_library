import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, ClipPath, Defs, G, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const UmrbrellaIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7473)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.8943 4.13372C6.11236 2.1173 9.00237 1 12 1C14.9976 1 17.8876 2.1173 20.1057 4.13372C22.3238 6.15015 23.7106 8.92091 23.9955 11.905C24.0223 12.1854 23.9295 12.4642 23.7399 12.6727C23.5504 12.8811 23.2817 13 23 13H13V19C13 19.5304 13.2107 20.0391 13.5858 20.4142C13.9609 20.7893 14.4696 21 15 21C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19C19 20.0609 18.5786 21.0783 17.8284 21.8284C17.0783 22.5786 16.0609 23 15 23C13.9391 23 12.9217 22.5786 12.1716 21.8284C11.4214 21.0783 11 20.0609 11 19V13H1C0.718259 13 0.449586 12.8811 0.260064 12.6727C0.0705417 12.4642 -0.0222434 12.1854 0.00452884 11.905C0.289372 8.92091 1.67623 6.15015 3.8943 4.13372ZM21.8387 11C21.4083 8.93407 20.3357 7.04572 18.7604 5.6136C16.9104 3.93185 14.5001 3 12 3C9.4999 3 7.08957 3.93185 5.23964 5.6136C3.66431 7.04572 2.5917 8.93407 2.16128 11H21.8387Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7473">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
