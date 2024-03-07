import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const CalendarIcon = ({
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
        d="M19 3H17V2C17 1.45 16.55 1 16 1C15.45 1 15 1.45 15 2V3H9V2C9 1.45 8.55 1 8 1C7.45 1 7 1.45 7 2V3H5C3.34 3 2 4.34 2 6V20C2 21.66 3.34 23 5 23H19C20.66 23 22 21.66 22 20V6C22 4.34 20.66 3 19 3ZM5 5H7V6C7 6.55 7.45 7 8 7C8.55 7 9 6.55 9 6V5H15V6C15 6.55 15.45 7 16 7C16.55 7 17 6.55 17 6V5H19C19.55 5 20 5.45 20 6V9H4V6C4 5.45 4.45 5 5 5ZM19 21H5C4.45 21 4 20.55 4 20V11H20V20C20 20.55 19.55 21 19 21Z"
        fill={fill}
      />
    </Svg>
  );
};
