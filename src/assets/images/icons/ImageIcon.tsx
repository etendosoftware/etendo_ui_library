import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ImageIcon = ({
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
        d="M19 2H5C3.34 2 2 3.34 2 5V19C2 20.66 3.34 22 5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2ZM4 5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V12.59L16.71 9.3C16.32 8.91 15.69 8.91 15.3 9.3L4.66 19.93C4.28 19.79 4 19.43 4 19V5ZM19 20H7.41L16 11.41L20 15.41V19C20 19.55 19.55 20 19 20Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 11C9.88 11 11 9.88 11 8.5C11 7.12 9.88 6 8.5 6C7.12 6 6 7.12 6 8.5C6 9.88 7.12 11 8.5 11ZM8.5 8C8.78 8 9 8.22 9 8.5C9 8.78 8.78 9 8.5 9C8.22 9 8 8.78 8 8.5C8 8.22 8.22 8 8.5 8Z"
        fill={fill}
      />
    </Svg>
  );
};
