import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GitMergeIcon = ({
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
        d="M18 14C16.16 14 14.62 15.26 14.16 16.95C12.35 16.76 10.65 15.95 9.35 14.65C8.05 13.35 7.25 11.65 7.05 9.84C8.75 9.38 10 7.84 10 6C10 3.79 8.21 2 6 2C3.79 2 2 3.79 2 6C2 7.86 3.28 9.41 5 9.86V21C5 21.55 5.45 22 6 22C6.55 22 7 21.55 7 21V15C7.28 15.38 7.59 15.73 7.93 16.07C9.6 17.74 11.8 18.75 14.13 18.96C14.56 20.7 16.12 22 18 22C20.21 22 22 20.21 22 18C22 15.79 20.21 14 18 14ZM4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8C4.9 8 4 7.1 4 6ZM18 20C16.9 20 16 19.1 16 18C16 16.9 16.9 16 18 16C19.1 16 20 16.9 20 18C20 19.1 19.1 20 18 20Z"
        fill={fill}
      />
    </Svg>
  );
};
