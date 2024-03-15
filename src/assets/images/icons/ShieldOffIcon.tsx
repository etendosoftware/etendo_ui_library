import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ShieldOffIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7449)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.19006 4.12L12.0001 3.07L19.0001 5.7V12C19.0001 12.58 18.9101 13.15 18.7301 13.71C18.5701 14.24 18.8601 14.8 19.3901 14.96C19.9201 15.12 20.4801 14.83 20.6401 14.3C20.8701 13.56 20.9901 12.79 20.9901 12.01V5C20.9901 4.58 20.7301 4.21 20.3401 4.06L12.3501 1.06C12.1201 0.979997 11.8801 0.979997 11.6501 1.06L8.49006 2.24C7.97006 2.43 7.71006 3.01 7.90006 3.53C8.09006 4.05 8.67006 4.31 9.19006 4.12Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.7101 22.29L1.71006 0.289998C1.32006 -0.100002 0.680059 -0.100002 0.290059 0.289998C-0.0999414 0.679998 -0.0999414 1.32 0.290059 1.71L3.12006 4.54C3.05006 4.68 3.00006 4.83 3.00006 5V12C3.00006 15.45 5.28006 18.2 7.34006 20C8.39006 20.92 9.44006 21.64 10.2201 22.13C10.6101 22.37 10.9401 22.56 11.1701 22.69C11.2901 22.75 11.3801 22.8 11.4401 22.84C11.4701 22.86 11.5001 22.87 11.5201 22.88H11.5401V22.89C11.8301 23.04 12.1701 23.03 12.4501 22.89C14.3601 21.88 16.0901 20.58 17.6101 19.05L22.2801 23.72C22.6701 24.11 23.3001 24.11 23.6901 23.72C24.0801 23.33 24.0801 22.7 23.6901 22.31L23.7101 22.29ZM12.0001 20.86C11.8101 20.75 11.5601 20.61 11.2801 20.43C10.5601 19.98 9.61006 19.32 8.66006 18.49C6.72006 16.79 5.00006 14.55 5.00006 11.99V6.4L16.2201 17.62C14.9701 18.88 13.5501 19.98 12.0001 20.85V20.86Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7449">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
