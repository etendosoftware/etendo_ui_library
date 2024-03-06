import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CreditCardIcon = ({
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
        d="M21 3H3C1.34 3 0 4.34 0 6V18C0 19.66 1.34 21 3 21H21C22.66 21 24 19.66 24 18V6C24 4.34 22.66 3 21 3ZM3 5H21C21.55 5 22 5.45 22 6V9H2V6C2 5.45 2.45 5 3 5ZM21 19H3C2.45 19 2 18.55 2 18V11H22V18C22 18.55 21.55 19 21 19Z"
        fill={fill}
      />
    </Svg>
  );
};
