import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const GoIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 46);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 46 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.7358 13.2995C35.0356 13.2995 35.3354 13.2995 35.8266 13.2995C35.5451 12.9843 35.3835 12.7843 35.2025 12.6036C32.5372 9.94099 29.8644 7.28592 27.2047 4.61787C26.3075 3.71781 26.0836 2.63847 26.5753 1.49571C27.0624 0.487113 28.094 -0.129796 29.2187 0.0231831C29.8764 0.121396 30.4957 0.39689 30.8962 0.809716C35.3517 5.20731 39.7734 9.6392 44.182 14.0839C45.3075 15.2019 45.2798 16.7515 44.1647 17.8747C39.7535 22.4025 35.3289 26.7493 30.8885 31.1641C29.7489 32.3137 28.2113 32.2476 27.1137 31.1501C26.0415 30.0454 26.0448 28.4995 27.1781 27.3549C29.8097 24.6974 32.4616 22.0596 35.1127 19.4215C35.3381 19.2286 35.5611 19.0967 35.7875 18.9366C35.7349 18.8387 35.6823 18.741 35.6299 18.6433C35.3464 18.6433 35.12 18.6433 34.6629 18.6433C19.5315 18.6431 18.4452 18.6441 3.31375 18.6416C1.41425 18.6415 0.346066 17.5713 0.445111 15.7916C0.602418 14.4227 1.49149 13.4329 2.88827 13.3153C3.2187 13.2875 3.55296 13.3 3.88538 13.3L34.7358 13.2995Z"
        fill={fill}
      />
    </Svg>
  );
};
