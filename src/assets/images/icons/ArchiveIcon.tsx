import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArchiveIcon = ({
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
        d="M23 2H1C0.45 2 0 2.45 0 3V8C0 8.55 0.45 9 1 9H2V21C2 21.55 2.45 22 3 22H21C21.55 22 22 21.55 22 21V9H23C23.55 9 24 8.55 24 8V3C24 2.45 23.55 2 23 2ZM20 20H4V9H20V20ZM22 7H2V4H22V7Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 13H14C14.55 13 15 12.55 15 12C15 11.45 14.55 11 14 11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13Z"
        fill={fill}
      />
    </Svg>
  );
};
