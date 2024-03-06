import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ClipboardIcon = ({
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
        d="M20.12 3.88C19.56 3.32 18.79 3 18 3H17C17 1.9 16.1 1 15 1H9C7.9 1 7 1.9 7 3H6C5.2 3 4.44 3.32 3.88 3.88C3.32 4.44 3 5.21 3 6V20C3 20.8 3.32 21.56 3.88 22.12C4.44 22.68 5.21 23 6 23H18C18.8 23 19.56 22.68 20.12 22.12C20.68 21.56 21 20.79 21 20V6C21 5.2 20.68 4.44 20.12 3.88ZM9 3H15V5H9V3ZM19 20C19 20.27 18.89 20.52 18.71 20.71C18.53 20.9 18.27 21 18 21H6C5.73 21 5.48 20.89 5.29 20.71C5.1 20.52 5 20.27 5 20V6C5 5.73 5.11 5.48 5.29 5.29C5.47 5.1 5.73 5 6 5H7C7 6.1 7.9 7 9 7H15C16.1 7 17 6.1 17 5H18C18.27 5 18.52 5.11 18.71 5.29C18.9 5.48 19 5.73 19 6V20Z"
        fill={fill}
      />
    </Svg>
  );
};
