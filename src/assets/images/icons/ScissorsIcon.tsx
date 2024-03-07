import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ScissorsIcon = ({
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
        d="M21.71 4.71C22.1 4.32 22.1 3.69 21.71 3.3C21.32 2.91 20.69 2.91 20.3 3.3L13.01 10.59L10.44 8.02C10.79 7.43 11.01 6.74 11.01 6C11 3.79 9.21 2 7 2C4.79 2 3 3.79 3 6C3 8.21 4.79 10 7 10C7.74 10 8.43 9.79 9.02 9.43L11.59 12L9.02 14.57C8.43 14.22 7.74 14 7 14C4.79 14 3 15.79 3 18C3 20.21 4.79 22 7 22C9.21 22 11 20.21 11 18C11 17.26 10.78 16.57 10.43 15.98L21.71 4.71ZM5 6C5 4.9 5.9 4 7 4C8.1 4 9 4.9 9 6C9 6.55 8.78 7.05 8.42 7.41C8.06 7.77 7.56 7.99 7.01 7.99C5.91 7.99 5.01 7.09 5.01 5.99L5 6ZM7 20C5.9 20 5 19.1 5 18C5 16.9 5.9 16 7 16C7.55 16 8.05 16.22 8.41 16.58C8.77 16.94 8.99 17.44 8.99 17.99C8.99 19.09 8.09 19.99 6.99 19.99L7 20Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.18 13.77C15.79 13.38 15.16 13.38 14.77 13.77C14.38 14.16 14.38 14.79 14.77 15.18L20.3 20.7C20.69 21.09 21.32 21.09 21.71 20.7C22.1 20.31 22.1 19.68 21.71 19.29L16.18 13.77Z"
        fill={fill}
      />
    </Svg>
  );
};
