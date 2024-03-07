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
  const width = sizeSvg(style?.width, 24);
  const height = sizeSvg(style?.height, 24);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.92 12.38C20.02 12.14 20.02 11.86 19.92 11.62C19.87 11.5 19.8 11.4 19.71 11.3L12.71 4.29C12.32 3.9 11.69 3.9 11.3 4.29C10.91 4.68 10.91 5.31 11.3 5.7L16.59 10.99H5C4.45 10.99 4 11.44 4 11.99C4 12.54 4.45 12.99 5 12.99H16.59L11.3 18.28C10.91 18.67 10.91 19.3 11.3 19.69C11.69 20.08 12.32 20.08 12.71 19.69L19.71 12.69C19.8 12.6 19.87 12.49 19.92 12.37V12.38Z"
        fill={fill}
      />
    </Svg>
  );
};
