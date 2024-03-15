import React from 'react';
import { ImageStyle, ColorValue } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArrowDownRightIcon = ({
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
        d="M18.0001 7C18.0001 6.45 17.5501 6 17.0001 6C16.4501 6 16.0001 6.45 16.0001 7V14.59L7.71006 6.29C7.32006 5.9 6.68006 5.9 6.29006 6.29C5.90006 6.68 5.90006 7.32 6.29006 7.71L14.5801 16H7.00006C6.45006 16 6.00006 16.45 6.00006 17C6.00006 17.55 6.45006 18 7.00006 18H17.0001C17.1301 18 17.2501 17.97 17.3701 17.92C17.6101 17.82 17.8101 17.62 17.9101 17.38C17.9601 17.26 17.9901 17.13 17.9901 17V7H18.0001Z"
        fill={fill}
      />
    </Svg>
  );
};
