import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME, NEUTRAL_0 } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const CheckFalseIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 25 25"
      style={style}
      width={style?.width ?? 25}
      height={style?.height ?? 25}>
      <Path
        fill={NEUTRAL_0}
        d="M5,0.8h15c2.3,0,4.2,1.9,4.2,4.2v15c0,2.3-1.9,4.2-4.2,4.2H5c-2.3,0-4.2-1.9-4.2-4.2V5C0.8,2.7,2.7,0.8,5,0.8z"
      />
      <Path
        fill={fill}
        d="M20,25H5c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5h15c2.8,0,5,2.2,5,5v15C25,22.8,22.8,25,20,25z M5,1.5
	C3.1,1.5,1.5,3.1,1.5,5v15c0,1.9,1.6,3.5,3.5,3.5h15c1.9,0,3.5-1.6,3.5-3.5V5c0-1.9-1.6-3.5-3.5-3.5H5z"
      />
    </Svg>
  );
};
