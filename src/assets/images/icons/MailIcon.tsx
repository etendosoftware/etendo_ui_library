import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const MailIcon = ({
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
        d="M20 3H4C2.35 3 1 4.35 1 6V18C1 19.65 2.35 21 4 21H20C21.65 21 23 19.65 23 18V6C23 4.35 21.65 3 20 3ZM4 5H20C20.39 5 20.72 5.23 20.89 5.56L12 11.78L3.11 5.56C3.28 5.23 3.61 5 4 5ZM20 19H4C3.45 19 3 18.55 3 18V7.92L11.43 13.82C11.77 14.06 12.23 14.06 12.58 13.82L21.01 7.92V18C21.01 18.55 20.56 19 20.01 19H20Z"
        fill={fill}
      />
    </Svg>
  );
};
