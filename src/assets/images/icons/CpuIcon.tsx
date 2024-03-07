import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CpuIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_1992_7570)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 8H9C8.45 8 8 8.45 8 9V15C8 15.55 8.45 16 9 16H15C15.55 16 16 15.55 16 15V9C16 8.45 15.55 8 15 8ZM14 14H10V10H14V14Z"
          fill={fill}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23 13H21V10H23C23.55 10 24 9.55 24 9C24 8.45 23.55 8 23 8H21V6C21 4.34 19.66 3 18 3H16V1C16 0.45 15.55 0 15 0C14.45 0 14 0.45 14 1V3H10V1C10 0.45 9.55 0 9 0C8.45 0 8 0.45 8 1V3H6C4.34 3 3 4.34 3 6V8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H3V13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H3V18C3 19.66 4.34 21 6 21H8V23C8 23.55 8.45 24 9 24C9.55 24 10 23.55 10 23V21H14V23C14 23.55 14.45 24 15 24C15.55 24 16 23.55 16 23V21H18C19.66 21 21 19.66 21 18V15H23C23.55 15 24 14.55 24 14C24 13.45 23.55 13 23 13ZM19 18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1992_7570">
          <Rect width="24" height="24" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
