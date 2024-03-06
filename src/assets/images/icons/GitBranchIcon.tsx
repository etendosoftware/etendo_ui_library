import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const GitBranchIcon = ({
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
        d="M22 6C22 3.79 20.21 2 18 2C15.79 2 14 3.79 14 6C14 7.84 15.26 9.38 16.95 9.84C16.76 11.65 15.95 13.35 14.65 14.65C13.35 15.95 11.65 16.75 9.84 16.95C9.46 15.57 8.38 14.5 7 14.14V3C7 2.45 6.55 2 6 2C5.45 2 5 2.45 5 3V14.14C3.28 14.59 2 16.14 2 18C2 20.21 3.79 22 6 22C7.88 22 9.44 20.7 9.87 18.96C12.2 18.76 14.4 17.74 16.07 16.07C17.74 14.4 18.75 12.2 18.96 9.87C20.7 9.44 22 7.88 22 6ZM6 20C4.9 20 4 19.1 4 18C4 16.9 4.9 16 6 16C7.1 16 8 16.9 8 18C8 19.1 7.1 20 6 20ZM18 8C16.9 8 16 7.1 16 6C16 4.9 16.9 4 18 4C19.1 4 20 4.9 20 6C20 7.1 19.1 8 18 8Z"
        fill={fill}
      />
    </Svg>
  );
};
