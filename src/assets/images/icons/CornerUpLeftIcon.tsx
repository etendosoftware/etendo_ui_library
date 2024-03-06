import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerUpLeftIcon = ({
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
        d="M19.53 9.46C18.59 8.52 17.32 8 15.99 8H6.41L9.7 4.71C10.09 4.32 10.09 3.69 9.7 3.3C9.31 2.91 8.68 2.91 8.29 3.3L3.29 8.29C3.2 8.38 3.13 8.49 3.08 8.61C2.98 8.85 2.98 9.13 3.08 9.37C3.13 9.49 3.2 9.6 3.29 9.69L8.29 14.69C8.68 15.08 9.31 15.08 9.7 14.69C10.09 14.3 10.09 13.67 9.7 13.28L6.41 9.99H16C16.8 9.99 17.56 10.31 18.12 10.87C18.68 11.43 19 12.2 19 12.99V19.99C19 20.54 19.45 20.99 20 20.99C20.55 20.99 21 20.54 21 19.99V12.99C21 11.66 20.47 10.39 19.54 9.45L19.53 9.46Z"
        fill={fill}
      />
    </Svg>
  );
};
