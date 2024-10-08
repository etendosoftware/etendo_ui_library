import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const ArrowRightIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 23);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 32"
      fill="none"
      style={style}>
      <Path
        d="M21.2914 12.5093C23.4811 14.3213 23.4811 17.6787 21.2914 19.4907L7.44262 30.9511C4.48866 33.3956 0.0229495 31.2947 0.0229495 27.4604L0.0229492 4.5396C0.0229492 0.705348 4.48865 -1.39562 7.44261 1.04888L21.2914 12.5093Z"
        fill={fill}
      />
    </Svg>
  );
};
