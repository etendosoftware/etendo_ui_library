import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LogInIcon = ({
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
        d="M21.12 2.88C20.56 2.32 19.79 2 19 2H15C14.45 2 14 2.45 14 3C14 3.55 14.45 4 15 4H19C19.27 4 19.52 4.11 19.71 4.29C19.9 4.47 20 4.73 20 5V19C20 19.27 19.89 19.52 19.71 19.71C19.53 19.9 19.27 20 19 20H15C14.45 20 14 20.45 14 21C14 21.55 14.45 22 15 22H19C19.8 22 20.56 21.68 21.12 21.12C21.68 20.56 22 19.79 22 19V5C22 4.2 21.68 3.44 21.12 2.88Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.92 12.38C16.02 12.14 16.02 11.86 15.92 11.62C15.87 11.5 15.8 11.39 15.7 11.3L10.7 6.3C10.31 5.91 9.68 5.91 9.29 6.3C8.9 6.69 8.9 7.32 9.29 7.71L12.58 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H12.59L9.3 16.29C8.91 16.68 8.91 17.31 9.3 17.7C9.69 18.09 10.32 18.09 10.71 17.7L15.71 12.7C15.8 12.61 15.88 12.5 15.93 12.37L15.92 12.38Z"
        fill={fill}
      />
    </Svg>
  );
};
