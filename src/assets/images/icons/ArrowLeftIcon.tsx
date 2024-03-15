import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const ArrowLeftIcon = ({
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
        d="M19 11H7.41L12.71 5.71C13.1 5.32 13.1 4.69 12.71 4.3C12.32 3.91 11.69 3.91 11.3 4.3L4.29 11.29C4.2 11.38 4.13 11.49 4.08 11.61C3.98 11.85 3.98 12.13 4.08 12.37C4.13 12.49 4.2 12.6 4.3 12.69L11.3 19.69C11.69 20.08 12.32 20.08 12.71 19.69C13.1 19.3 13.1 18.67 12.71 18.28L7.42 12.99H19.01C19.56 12.99 20.01 12.54 20.01 11.99C20.01 11.44 19.56 10.99 19.01 10.99L19 11Z"
        fill={fill}
      />
    </Svg>
  );
};
