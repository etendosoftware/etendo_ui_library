import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const CornerRightDownIcon = ({
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
        d="M20.71 14.29C20.32 13.9 19.69 13.9 19.3 14.29L16.01 17.58V8C16.01 6.67 15.48 5.4 14.55 4.46C13.61 3.52 12.34 3 11.01 3H4C3.45 3 3 3.45 3 4C3 4.55 3.45 5 4 5H11C11.8 5 12.56 5.32 13.12 5.88C13.68 6.44 14 7.21 14 8V17.59L10.71 14.3C10.32 13.91 9.69 13.91 9.3 14.3C8.91 14.69 8.91 15.32 9.3 15.71L14.3 20.71C14.39 20.8 14.5 20.87 14.62 20.92C14.74 20.97 14.87 21 15 21C15.13 21 15.26 20.97 15.38 20.92C15.5 20.87 15.6 20.8 15.7 20.71L20.7 15.71C21.09 15.32 21.09 14.69 20.7 14.3L20.71 14.29Z"
        fill={fill}
      />
    </Svg>
  );
};
