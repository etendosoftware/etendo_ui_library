import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
  stroke?: string;
}

export const CheckTrueIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
  stroke,
}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width ?? 25}
      height={style?.height ?? 25}
      viewBox="0 0 25 25"
      fill="none"
      style={style}>
      <Rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        rx="4.25"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5671 8.78117C17.1418 8.4061 16.4524 8.40646 16.0272 8.78117L11.0571 13.8046L8.86323 11.5555C8.43826 11.1196 7.74886 11.1196 7.34421 11.5556C7.03736 11.9917 7.03736 12.6987 7.34421 13.1347L10.2867 16.1731C10.7121 16.609 11.4015 16.609 11.8268 16.1731L17.5671 10.2879C17.9921 9.85169 17.9921 9.14478 17.5671 8.78117Z"
        fill={fill}
      />
      <Rect
        x="0.75"
        y="0.75"
        width="23.5"
        height="23.5"
        rx="4.25"
        stroke={stroke}
        stroke-width="1.5"
      />
    </Svg>
  );
};
