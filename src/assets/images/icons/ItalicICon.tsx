import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ItalicICon = ({
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
        d="M19 3H10C9.45 3 9 3.45 9 4C9 4.55 9.45 5 10 5H13.56L8.31 19H5C4.45 19 4 19.45 4 20C4 20.55 4.45 21 5 21H14C14.55 21 15 20.55 15 20C15 19.45 14.55 19 14 19H10.44L15.69 5H19C19.55 5 20 4.55 20 4C20 3.45 19.55 3 19 3Z"
        fill={fill}
      />
    </Svg>
  );
};
