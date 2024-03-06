import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path, Defs, G, ClipPath, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const CameraOffIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7634)">
        <Path
          d="M1.70999 0.290001C1.31999 -0.0999986 0.67999 -0.0999986 0.28999 0.290001C-0.10001 0.680001 -0.10001 1.32 0.28999 1.71L3.57999 5H2.98999C2.18999 5 1.42999 5.32 0.86999 5.88C0.30999 6.44 -0.0100098 7.21 -0.0100098 8V19C-0.0100098 19.8 0.30999 20.56 0.86999 21.12C1.42999 21.68 2.19999 22 2.98999 22H20.58L22.29 23.71C22.68 24.1 23.31 24.1 23.7 23.71C24.09 23.32 24.09 22.69 23.7 22.3L1.70999 0.290001ZM9.38999 11.5C9.46999 11.36 9.57999 11.23 9.68999 11.1L13.9 15.31C13.77 15.42 13.65 15.52 13.5 15.61C13.12 15.83 12.7 15.97 12.26 16.01C11.82 16.05 11.38 15.99 10.96 15.84C10.55 15.69 10.17 15.45 9.85999 15.14C9.54999 14.83 9.30999 14.45 9.15999 14.04C9.00999 13.63 8.94999 13.18 8.98999 12.74C9.02999 12.3 9.16999 11.88 9.38999 11.5ZM2.99999 20C2.72999 20 2.47999 19.89 2.28999 19.71C2.09999 19.53 1.99999 19.27 1.99999 19V8C1.99999 7.73 2.10999 7.48 2.28999 7.29C2.47999 7.1 2.72999 7 2.99999 7H5.58999L8.26999 9.68C8.04999 9.93 7.83999 10.19 7.66999 10.48C7.29999 11.11 7.06999 11.82 6.99999 12.55C6.92999 13.28 7.02999 14.02 7.27999 14.71C7.52999 15.4 7.92999 16.03 8.44999 16.55C8.96999 17.07 9.59999 17.47 10.29 17.72C10.98 17.97 11.72 18.06 12.45 18C13.18 17.94 13.89 17.7 14.52 17.33C14.81 17.16 15.07 16.95 15.32 16.73L18.59 20H2.99999Z"
          fill={fill}
        />
        <Path
          d="M23.12 5.88C22.56 5.32 21.79 5 21 5H17.54L15.84 2.45C15.65 2.17 15.34 2 15.01 2H9.00999C8.45999 2 8.00999 2.45 8.00999 3C8.00999 3.55 8.45999 4 9.00999 4H14.47L16.17 6.55C16.36 6.83 16.67 7 17 7H21C21.27 7 21.52 7.11 21.71 7.29C21.9 7.48 22 7.73 22 8V17.34C22 17.89 22.45 18.34 23 18.34C23.55 18.34 24 17.89 24 17.34V8C24 7.2 23.68 6.44 23.12 5.88Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7634">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
