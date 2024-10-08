import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ArrowFirstIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 31);
  const height = sizeSvg(style?.height, 32);
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 31 32"
      fill="none"
      style={style}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.7901 0C2.16123 3.24449e-08 2.53235 6.48898e-08 2.9034 9.73277e-08C3.18664 0.113646 3.49781 0.184106 3.74726 0.349623C4.29665 0.714262 4.51729 1.26406 4.51632 1.92727L4.52659 29.9793C4.53422 31.2575 3.6186 32.0643 2.52882 31.996C2.43644 31.9902 2.34342 31.9956 2.25064 31.9956C0.999848 31.9957 0.310647 31.3086 0.310487 30.0521C0.309605 20.691 0.309766 11.3299 0.310409 1.96874C0.310489 0.814188 0.711072 0.35571 1.7901 0ZM8.55658 12.8884C14.1996 8.9659 19.8425 5.04343 25.4815 1.11527C26.1889 0.622537 26.9056 0.16357 27.7671 2.27098e-06C27.9733 2.28901e-06 28.1794 2.30703e-06 28.3856 2.32505e-06C29.3666 0.206594 29.9889 0.820523 30.2563 1.77401C30.3866 2.2389 30.4741 2.73374 30.4748 3.21528C30.4876 11.733 30.4628 20.2507 30.4307 28.7685C30.4282 29.3611 30.3978 29.9906 30.0936 30.5684C29.7533 31.5261 28.8343 32.005 27.8727 31.9526C27.1081 31.8723 26.4613 31.5231 25.8459 31.0956C20.0833 27.0919 14.3211 23.0875 8.56204 19.0785C8.25801 18.8668 7.95799 18.637 7.70028 18.3718C6.72165 17.3098 6.3673 16.1896 6.87479 14.8316C7.19303 13.98 7.8311 13.3809 8.55658 12.8884Z"
        fill={fill}
      />
    </Svg>
  );
};
