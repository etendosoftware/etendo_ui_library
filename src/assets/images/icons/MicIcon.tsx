import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MicIcon = ({
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
        d="M12 16C13.06 16 14.08 15.58 14.83 14.83C15.58 14.08 16 13.06 16 12V4C16 2.94 15.58 1.92 14.83 1.17C14.08 0.42 13.06 0 12 0C10.94 0 9.92 0.42 9.17 1.17C8.42 1.92 8 2.94 8 4V12C8 13.06 8.42 14.08 9.17 14.83C9.92 15.58 10.94 16 12 16ZM10 4C10 3.47 10.21 2.96 10.59 2.59C10.97 2.22 11.47 2 12 2C12.53 2 13.04 2.21 13.41 2.59C13.79 2.97 14 3.47 14 4V12C14 12.53 13.79 13.04 13.41 13.41C13.03 13.79 12.53 14 12 14C11.47 14 10.96 13.79 10.59 13.41C10.22 13.03 10 12.53 10 12V4Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 9C18.45 9 18 9.45 18 10V12C18 13.59 17.37 15.12 16.24 16.24C15.11 17.37 13.59 18 12 18C10.41 18 8.88 17.37 7.76 16.24C6.63 15.11 6 13.59 6 12V10C6 9.45 5.55 9 5 9C4.45 9 4 9.45 4 10V12C4 14.12 4.84 16.16 6.34 17.66C7.6 18.92 9.24 19.71 11 19.93V22H8C7.45 22 7 22.45 7 23C7 23.55 7.45 24 8 24H16C16.55 24 17 23.55 17 23C17 22.45 16.55 22 16 22H13V19.93C14.75 19.71 16.39 18.92 17.66 17.66C19.16 16.16 20 14.12 20 12V10C20 9.45 19.55 9 19 9Z"
        fill={fill}
      />
    </Svg>
  );
};
