import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const TvIcon = ({
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
        d="M20 6H14.41L17.7 2.71C18.09 2.32 18.09 1.69 17.7 1.3C17.31 0.909998 16.68 0.909998 16.29 1.3L12 5.59L7.71 1.29C7.32 0.899998 6.69 0.899998 6.3 1.29C5.91 1.68 5.91 2.31 6.3 2.7L9.59 5.99H4C2.34 5.99 1 7.33 1 8.99V19.99C1 21.65 2.34 22.99 4 22.99H20C21.66 22.99 23 21.65 23 19.99V8.99C23 7.33 21.66 5.99 20 5.99V6ZM21 20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V9C3 8.45 3.45 8 4 8H20C20.55 8 21 8.45 21 9V20Z"
        fill={fill}
      />
    </Svg>
  );
};
