import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const ArrowUpCircleIcon = ({
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
        d="M12.71 7.29C12.62 7.2 12.51 7.12 12.39 7.07C12.15 6.97 11.87 6.97 11.63 7.07C11.51 7.12 11.4 7.19 11.31 7.29L7.31 11.29C6.92 11.68 6.92 12.31 7.31 12.7C7.7 13.09 8.33 13.09 8.72 12.7L11.01 10.41V16C11.01 16.55 11.46 17 12.01 17C12.56 17 13.01 16.55 13.01 16V10.41L15.3 12.7C15.69 13.09 16.32 13.09 16.71 12.7C17.1 12.31 17.1 11.68 16.71 11.29L12.71 7.29Z"
        fill={fill}
      />
    </Svg>
  );
};
