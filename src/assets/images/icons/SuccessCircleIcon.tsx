import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const SuccessCircleIcon = ({
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
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM15.1435 8.6555C15.5224 8.315 16.1368 8.31467 16.5159 8.6555C16.8947 8.98591 16.8947 9.62827 16.5159 10.0246L11.4001 15.3725C11.021 15.7685 10.4066 15.7685 10.0275 15.3725L7.4051 12.6115C7.13163 12.2153 7.13163 11.5729 7.4051 11.1766C7.76573 10.7804 8.38014 10.7804 8.75888 11.1765L10.7141 13.2203L15.1435 8.6555Z"
        fill={fill}
      />
    </Svg>
  );
};
