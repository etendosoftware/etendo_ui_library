import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TypeIcon = ({
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
        d="M20 3H4C3.45 3 3 3.45 3 4V7C3 7.55 3.45 8 4 8C4.55 8 5 7.55 5 7V5H11V19H9C8.45 19 8 19.45 8 20C8 20.55 8.45 21 9 21H15C15.55 21 16 20.55 16 20C16 19.45 15.55 19 15 19H13V5H19V7C19 7.55 19.45 8 20 8C20.55 8 21 7.55 21 7V4C21 3.45 20.55 3 20 3Z"
        fill={fill}
      />
    </Svg>
  );
};
