import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LifeBouyIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM19.03 17.61L16.17 14.75C16.69 13.96 17 13.01 17 12C17 10.99 16.69 10.04 16.17 9.25L19.03 6.39C20.26 7.93 21 9.88 21 12C21 14.12 20.26 16.07 19.03 17.61ZM9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12ZM17.61 4.97L14.75 7.83C13.96 7.31 13.01 7 12 7C10.99 7 10.04 7.31 9.25 7.83L6.39 4.97C7.93 3.74 9.88 3 12 3C14.12 3 16.07 3.74 17.61 4.97ZM4.97 6.39L7.83 9.25C7.31 10.04 7 10.99 7 12C7 13.01 7.31 13.96 7.83 14.75L4.97 17.61C3.74 16.07 3 14.12 3 12C3 9.88 3.74 7.93 4.97 6.39ZM6.39 19.03L9.25 16.17C10.04 16.69 10.99 17 12 17C13.01 17 13.96 16.69 14.75 16.17L17.61 19.03C16.07 20.26 14.12 21 12 21C9.88 21 7.93 20.26 6.39 19.03Z"
        fill={fill}
      />
    </Svg>
  );
};
