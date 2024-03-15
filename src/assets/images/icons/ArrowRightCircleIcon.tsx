import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowRightCircleIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.92 11.62C16.87 11.5 16.8 11.39 16.7 11.3L12.7 7.3C12.31 6.91 11.68 6.91 11.29 7.3C10.9 7.69 10.9 8.32 11.29 8.71L13.58 11H7.99C7.44 11 6.99 11.45 6.99 12C6.99 12.55 7.44 13 7.99 13H13.58L11.29 15.29C10.9 15.68 10.9 16.31 11.29 16.7C11.68 17.09 12.31 17.09 12.7 16.7L16.7 12.7C16.79 12.61 16.86 12.5 16.91 12.38C17.01 12.14 17.01 11.86 16.91 11.62H16.92Z"
        fill={fill}
      />
    </Svg>
  );
};
