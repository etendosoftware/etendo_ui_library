import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CrosshairIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM13 20.94V18C13 17.45 12.55 17 12 17C11.45 17 11 17.45 11 18V20.94C6.83 20.48 3.52 17.17 3.06 13H6C6.55 13 7 12.55 7 12C7 11.45 6.55 11 6 11H3.06C3.52 6.83 6.83 3.52 11 3.06V6C11 6.55 11.45 7 12 7C12.55 7 13 6.55 13 6V3.06C17.17 3.52 20.48 6.83 20.94 11H18C17.45 11 17 11.45 17 12C17 12.55 17.45 13 18 13H20.94C20.48 17.17 17.17 20.48 13 20.94Z"
        fill={fill}
      />
    </Svg>
  );
};
