import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { sizeSvg } from '../../../helpers/svg_utils';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const HashIcon = ({
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
        d="M20 14H15.78L16.22 10H19.99C20.54 10 20.99 9.55 20.99 9C20.99 8.45 20.54 8 19.99 8H16.44L16.98 3.11C17.04 2.56 16.65 2.07 16.1 2.01C15.55 1.95 15.06 2.34 15 2.89L14.43 8H10.44L10.98 3.11C11.04 2.56 10.65 2.07 10.1 2.01C9.55 1.95 9.06 2.34 9 2.89L8.43 8H4C3.45 8 3 8.45 3 9C3 9.55 3.45 10 4 10H8.22L7.78 14H4C3.45 14 3 14.45 3 15C3 15.55 3.45 16 4 16H7.55L7.01 20.89C6.95 21.44 7.34 21.93 7.89 21.99C8.44 22.05 8.93 21.66 8.99 21.11L9.56 16H13.55L13.01 20.89C12.95 21.44 13.34 21.93 13.89 21.99C14.44 22.05 14.93 21.66 14.99 21.11L15.56 16H20C20.55 16 21 15.55 21 15C21 14.45 20.55 14 20 14ZM9.78 14L10.22 10H14.21L13.77 14H9.78Z"
        fill={fill}
      />
    </Svg>
  );
};
