import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerRightUpIcon = ({
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
        d="M20.71 8.29L15.71 3.29C15.62 3.2 15.51 3.13 15.39 3.08C15.26 3.03 15.13 3 15 3C14.87 3 14.74 3.03 14.62 3.08C14.5 3.13 14.39 3.2 14.29 3.3L9.29 8.3C8.9 8.69 8.9 9.32 9.29 9.71C9.68 10.1 10.31 10.1 10.7 9.71L13.99 6.42V16.01C13.99 16.81 13.67 17.57 13.11 18.13C12.55 18.69 11.78 19.01 10.99 19.01H4C3.45 19.01 3 19.46 3 20.01C3 20.56 3.45 21.01 4 21.01H11C12.33 21.01 13.6 20.48 14.54 19.55C15.48 18.61 16 17.34 16 16.01V6.41L19.29 9.7C19.68 10.09 20.31 10.09 20.7 9.7C21.09 9.31 21.09 8.68 20.7 8.29H20.71Z"
        fill={fill}
      />
    </Svg>
  );
};
