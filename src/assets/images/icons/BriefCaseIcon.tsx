import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BriefCaseIcon = ({
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
        d="M20 6H17V5C17 4.2 16.68 3.44 16.12 2.88C15.56 2.32 14.79 2 14 2H10C9.2 2 8.44 2.32 7.88 2.88C7.32 3.44 7 4.21 7 5V6H4C2.34 6 1 7.34 1 9V19C1 20.66 2.34 22 4 22H20C21.66 22 23 20.66 23 19V9C23 7.34 21.66 6 20 6ZM9 5C9 4.73 9.11 4.48 9.29 4.29C9.47 4.1 9.73 4 10 4H14C14.27 4 14.52 4.11 14.71 4.29C14.9 4.48 15 4.73 15 5V6H9V5ZM15 8V20H9V8H15ZM3 19V9C3 8.45 3.45 8 4 8H7V20H4C3.45 20 3 19.55 3 19ZM21 19C21 19.55 20.55 20 20 20H17V8H20C20.55 8 21 8.45 21 9V19Z"
        fill={fill}
      />
    </Svg>
  );
};
