import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArrowDownLeftIcon = ({
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
        d="M17 16H9.41L17.71 7.71C18.1 7.32 18.1 6.69 17.71 6.3C17.32 5.91 16.69 5.91 16.3 6.3L8 14.59V7C8 6.45 7.55 6 7 6C6.45 6 6 6.45 6 7V17C6 17.13 6.03 17.25 6.08 17.37C6.18 17.61 6.38 17.81 6.62 17.91C6.74 17.96 6.87 17.98 6.99 17.99H16.99C17.54 17.99 17.99 17.54 17.99 16.99C17.99 16.44 17.54 15.99 16.99 15.99L17 16Z"
        fill={fill}
      />
    </Svg>
  );
};
