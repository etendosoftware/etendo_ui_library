import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const CancelIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 33);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.8965 25.1061C29.4324 23.6432 27.9677 22.1791 26.5035 20.7148C24.935 19.147 23.3666 17.5784 21.7977 16.0115L24.4948 13.3135C26.584 11.2236 28.6722 9.13384 30.7606 7.09283C31.0089 6.79407 31.2835 6.52268 31.5286 6.18163C32.2964 5.09369 32.4773 3.71463 32.0243 2.53986C31.5249 1.2665 30.4538 0.370832 29.1391 0.0957969C27.7643 -0.19204 26.4891 0.262772 25.3481 1.39131C23.7809 2.96731 22.2107 4.54064 20.6406 6.11398C19.1849 7.57161 17.7308 9.02936 16.2776 10.4888C14.2812 8.48724 12.3072 6.48706 10.2851 4.48713L8.91536 3.1159C8.71963 2.92059 8.5268 2.72352 8.33192 2.52621L8.31287 2.50589C7.84344 2.02814 7.35792 1.5345 6.84523 1.05451C6.01655 0.240565 4.80781 -0.128636 3.64439 0.0400376C2.46695 0.211563 1.43999 0.952027 0.827366 1.95606C-0.12503 3.60469 0.182161 5.43012 1.64883 6.89958C3.79395 9.04932 5.94113 11.1971 8.08874 13.3448L10.7532 16.0097L10.4366 16.36C7.51677 19.2476 4.6574 22.1066 1.80136 24.9658L1.74627 25.0206C1.58372 25.2241 1.28873 25.4772 1.04937 25.8027C0.381657 26.7113 0.137202 27.8773 0.378259 28.9313C0.620165 30.0185 1.33193 30.9542 2.35671 31.499C2.93177 31.8256 3.55835 31.9913 4.19221 31.9913C5.27214 31.9913 6.2894 31.5209 7.21637 30.5943C9.17802 28.635 11.138 26.6748 13.0971 24.7143L16.2805 21.5306L16.9623 22.2135C19.6785 24.9334 22.4874 27.7461 25.2435 30.494C25.5671 30.8167 26.0743 31.2828 26.7352 31.6045C27.8842 32.21 29.2362 32.0959 30.353 31.4283C31.4935 30.7469 32.2078 29.5595 32.2616 28.2521C32.3341 26.541 31.2516 25.4609 30.8965 25.1061Z"
        fill={fill}
      />
    </Svg>
  );
};
