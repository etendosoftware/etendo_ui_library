import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SlidersIcon = ({
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
        d="M4 11C4.55 11 5 10.55 5 10V3C5 2.45 4.55 2 4 2C3.45 2 3 2.45 3 3V10C3 10.55 3.45 11 4 11Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 11C11.45 11 11 11.45 11 12V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V12C13 11.45 12.55 11 12 11Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 13C20.55 13 21 12.55 21 12V3C21 2.45 20.55 2 20 2C19.45 2 19 2.45 19 3V12C19 12.55 19.45 13 20 13Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 13H1C0.45 13 0 13.45 0 14C0 14.55 0.45 15 1 15H3V21C3 21.55 3.45 22 4 22C4.55 22 5 21.55 5 21V15H7C7.55 15 8 14.55 8 14C8 13.45 7.55 13 7 13Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 7H13V3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3V7H9C8.45 7 8 7.45 8 8C8 8.55 8.45 9 9 9H15C15.55 9 16 8.55 16 8C16 7.45 15.55 7 15 7Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 15H17C16.45 15 16 15.45 16 16C16 16.55 16.45 17 17 17H19V21C19 21.55 19.45 22 20 22C20.55 22 21 21.55 21 21V17H23C23.55 17 24 16.55 24 16C24 15.45 23.55 15 23 15Z"
        fill={fill}
      />
    </Svg>
  );
};
