import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const LockIcon = ({
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
        d="M19 10H18V7C18 5.41 17.37 3.88 16.24 2.76C15.11 1.63 13.59 1 12 1C10.41 1 8.88 1.63 7.76 2.76C6.64 3.89 6 5.41 6 7V10H5C3.34 10 2 11.34 2 13V20C2 21.66 3.34 23 5 23H19C20.66 23 22 21.66 22 20V13C22 11.34 20.66 10 19 10ZM8 7C8 5.94 8.42 4.92 9.17 4.17C9.92 3.42 10.94 3 12 3C13.06 3 14.08 3.42 14.83 4.17C15.58 4.92 16 5.94 16 7V10H8V7ZM20 20C20 20.55 19.55 21 19 21H5C4.45 21 4 20.55 4 20V13C4 12.45 4.45 12 5 12H19C19.55 12 20 12.45 20 13V20Z"
        fill={fill}
      />
    </Svg>
  );
};
