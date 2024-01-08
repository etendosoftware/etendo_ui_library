import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const WarningCircleIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.8932 14.4861L13.0483 5.78181H11.0855L11.2406 14.4861H12.8932ZM11.2227 17.7673C11.4574 17.998 11.7398 18.1133 12.0699 18.1133C12.2847 18.1133 12.4815 18.0597 12.6605 17.9523C12.8395 17.8449 12.9827 17.7017 13.0901 17.5227C13.2014 17.3398 13.2591 17.1389 13.2631 16.9202C13.2591 16.594 13.1398 16.3156 12.9051 16.0849C12.6705 15.8503 12.3921 15.7329 12.0699 15.7329C11.7398 15.7329 11.4574 15.8503 11.2227 16.0849C10.9881 16.3156 10.8727 16.594 10.8767 16.9202C10.8727 17.2503 10.9881 17.5327 11.2227 17.7673Z"
        fill={fill}
      />
    </Svg>
  );
};
