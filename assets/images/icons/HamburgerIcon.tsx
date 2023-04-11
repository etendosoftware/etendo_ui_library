import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}

export const HamburgerIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 41}
      height={style?.height || 32}
      viewBox="0 0 41 32"
      fill="none"
      style={style as ViewStyle}
    >
      <Path
        d="M37.7336 -7.62939e-06H3.06356C1.59172 -7.62939e-06 0.39856 1.19315 0.39856 2.66499C0.39856 4.13683 1.59172 5.32999 3.06356 5.32999H37.7336C39.2054 5.32999 40.3986 4.13683 40.3986 2.66499C40.3986 1.19315 39.2054 -7.62939e-06 37.7336 -7.62939e-06Z"
        fill={fill ? fill : '#202452'}
      />
      <Path
        d="M37.7336 13.335H3.06356C1.59172 13.335 0.39856 14.5281 0.39856 16C0.39856 17.4718 1.59172 18.665 3.06356 18.665H37.7336C39.2054 18.665 40.3986 17.4718 40.3986 16C40.3986 14.5281 39.2054 13.335 37.7336 13.335Z"
        fill={fill ? fill : '#202452'}
      />
      <Path
        d="M37.7336 26.67H3.06356C1.59172 26.67 0.39856 27.8632 0.39856 29.335C0.39856 30.8068 1.59172 32 3.06356 32H37.7336C39.2054 32 40.3986 30.8068 40.3986 29.335C40.3986 27.8632 39.2054 26.67 37.7336 26.67Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
