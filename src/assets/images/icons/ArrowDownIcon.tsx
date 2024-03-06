import React from 'react';
import { ColorValue, ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';
import { sizeSvg } from '../../../helpers/svg_utils';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export const ArrowDownIcon = ({
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
        d="M19.7101 11.29C19.3201 10.9 18.6901 10.9 18.3001 11.29L13.0101 16.58V5C13.0101 4.45 12.5601 4 12.0101 4C11.4601 4 11.0101 4.45 11.0101 5V16.59L5.71007 11.29C5.32007 10.9 4.69007 10.9 4.30007 11.29C3.91007 11.68 3.91007 12.31 4.30007 12.7L11.3001 19.7C11.3901 19.79 11.5001 19.87 11.6201 19.92C11.7401 19.97 11.8701 19.99 11.9901 20C12.1201 20 12.2401 19.97 12.3601 19.92C12.4801 19.87 12.5901 19.8 12.6801 19.71L19.6801 12.71C20.0701 12.32 20.0701 11.69 19.6801 11.3L19.7101 11.29Z"
        fill={fill}
      />
    </Svg>
  );
};
