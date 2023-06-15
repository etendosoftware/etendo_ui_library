import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
  stroke?: string;
}

export const CheckFalse = ({style, fill, stroke}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 25}
      height={style?.height || 25}
      viewBox="0 0 25 25"
      fill="none"
      style={style}
    >
      <Rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        rx="4.25"
        fill={fill ? fill : '#F2F2F2'}
      />
      <Rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        rx="4.25"
        stroke={stroke ? stroke : '#D3D6E1'}
        stroke-width="1.5"
      />
    </Svg>
  );
};
