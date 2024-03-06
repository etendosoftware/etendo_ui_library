import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}
export const BookOpenIcon = ({
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
        d="M22 2H16C14.67 2 13.4 2.53 12.46 3.46C12.29 3.63 12.14 3.83 12 4.03C11.85 3.83 11.71 3.64 11.54 3.46C10.6 2.52 9.33 2 8 2H2C1.45 2 1 2.45 1 3V18C1 18.55 1.45 19 2 19H9C9.53 19 10.04 19.21 10.41 19.59C10.78 19.97 11 20.47 11 21C11 21.53 11.45 22 12 22C12.55 22 13 21.55 13 21C13 20.45 13.21 19.96 13.59 19.59C13.97 19.22 14.47 19 15 19H22C22.55 19 23 18.55 23 18V3C23 2.45 22.55 2 22 2ZM11 17.54C10.4 17.19 9.71 17 9 17H3V4H8C8.8 4 9.56 4.32 10.12 4.88C10.68 5.44 11 6.21 11 7V17.54ZM21 17H15C14.29 17 13.6 17.19 13 17.54V7C13 6.2 13.32 5.44 13.88 4.88C14.44 4.32 15.21 4 16 4H21V17Z"
        fill={fill}
      />
    </Svg>
  );
};
