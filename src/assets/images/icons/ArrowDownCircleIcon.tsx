import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArrowDownCircleIcon = ({
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
        d="M15.29 11.29L13 13.58V7.99C13 7.44 12.55 6.99 12 6.99C11.45 6.99 11 7.44 11 7.99V13.58L8.71 11.29C8.32 10.9 7.69 10.9 7.3 11.29C6.91 11.68 6.91 12.31 7.3 12.7L11.3 16.7C11.39 16.79 11.5 16.86 11.62 16.91C11.86 17.01 12.14 17.01 12.38 16.91C12.5 16.86 12.61 16.79 12.7 16.7L16.7 12.7C17.09 12.31 17.09 11.68 16.7 11.29C16.31 10.9 15.68 10.9 15.29 11.29Z"
        fill={fill}
      />
    </Svg>
  );
};
