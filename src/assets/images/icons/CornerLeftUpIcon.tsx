import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerLeftUpIcon = ({
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
        d="M20.0001 19H13.0001C12.2001 19 11.4401 18.68 10.8801 18.12C10.3201 17.56 10.0001 16.79 10.0001 16V6.41L13.2901 9.7C13.6801 10.09 14.3101 10.09 14.7001 9.7C15.0901 9.31 15.0901 8.68 14.7001 8.29L9.71006 3.29C9.62006 3.2 9.51006 3.12 9.39006 3.07C9.15006 2.97 8.87006 2.97 8.63006 3.07C8.51006 3.12 8.40006 3.19 8.31006 3.28L3.29006 8.29C2.90006 8.68 2.90006 9.31 3.29006 9.7C3.68006 10.09 4.31006 10.09 4.70006 9.7L7.99006 6.41V16C7.99006 17.33 8.52006 18.6 9.45006 19.54C10.3901 20.48 11.6601 21 12.9901 21H19.9901C20.5401 21 20.9901 20.55 20.9901 20C20.9901 19.45 20.5401 19 19.9901 19H20.0001Z"
        fill={fill}
      />
    </Svg>
  );
};
