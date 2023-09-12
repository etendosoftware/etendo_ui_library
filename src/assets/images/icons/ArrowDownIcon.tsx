import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArrowDownIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width ?? 41}
      height={style?.height ?? 29}
      viewBox="0 0 41 29"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.134 26.8356C22.869 29.5727 18.6723 29.5727 16.4072 26.8356L2.08173 9.52459C-0.973901 5.83214 1.65231 0.249999 6.44513 0.249999L35.0961 0.25C39.8889 0.25 42.5152 5.83213 39.4595 9.52458L25.134 26.8356Z"
        fill={fill}
      />
    </Svg>
  );
};
