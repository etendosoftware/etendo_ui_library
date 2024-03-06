import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const DribbbleIcon = ({
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
        d="M12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1ZM19.13 6.53C20.23 7.96 20.9 9.73 20.98 11.65C18.75 11.17 16.64 11.07 14.8 11.33C14.66 10.99 14.51 10.66 14.36 10.34C14.3 10.2 14.23 10.06 14.17 9.93C16.04 9.13 17.68 8.01 19.13 6.53ZM17.75 5.08C16.47 6.4 15 7.41 13.26 8.14C12.39 6.55 11.35 4.96 10.11 3.2C10.72 3.07 11.35 3 12 3C14.19 3 16.19 3.78 17.75 5.08ZM8.14 3.88C9.44 5.69 10.48 7.27 11.35 8.81C9.09 9.46 6.43 9.78 3.26 9.9C3.9 7.23 5.72 5.03 8.14 3.87V3.88ZM3 12C3 12 3 11.94 3 11.91C6.55 11.79 9.63 11.44 12.28 10.62C12.37 10.8 12.46 10.99 12.54 11.18C12.63 11.38 12.72 11.58 12.81 11.79C12.69 11.83 12.58 11.87 12.46 11.91C9.85 12.84 7.44 14.73 5.12 17.82C3.79 16.25 2.99 14.23 2.99 12.01L3 12ZM6.6 19.19C8.81 16.21 10.96 14.57 13.15 13.79C13.29 13.74 13.43 13.7 13.57 13.65C14.25 15.51 14.87 17.64 15.52 20.29C14.44 20.75 13.25 21 12.01 21C9.98 21 8.11 20.32 6.61 19.19H6.6ZM17.31 19.25C16.73 16.95 16.17 14.99 15.55 13.25C17.09 13.09 18.89 13.21 20.84 13.66C20.41 15.95 19.12 17.92 17.31 19.25Z"
        fill={fill}
      />
    </Svg>
  );
};
