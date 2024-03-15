import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const SlashIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM21 12C21 14.12 20.26 16.07 19.03 17.61L6.39 4.97C7.93 3.74 9.88 3 12 3C16.97 3 21 7.03 21 12ZM3 12C3 9.88 3.74 7.93 4.97 6.39L17.61 19.03C16.07 20.26 14.12 21 12 21C7.03 21 3 16.97 3 12Z"
        fill={fill}
      />
    </Svg>
  );
};
